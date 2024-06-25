<template>
	<div>
		<h2>Intellectual Property</h2>
		<div>
			<v-select id="select-tstt"
				v-model="selected"
				:options="options"
				label="nameProp"
				:reduce="option => option.id"
				:filterable="false"
				@open="onOpen"
				@close="onClose"
				@search="onSearch">
				<template #list-footer>
					<li v-show="hasNextPage" ref="load" class="loader">
						Loading more options...
					</li>
				</template>
			</v-select>
			<div>
				<button @click="addFileProperty">
					Add
				</button>
				<button @click="addFolderProperty">
					Add to folder
				</button>
				<button @click="deleteFileProperty">
					Delete
				</button>
			</div>
		</div>
		<div>
			<h2>Infomation</h2>
			<div>
				<div>
					<span>Property name: </span>
					<span><strong>{{ fileProperty.nameProp }}</strong></span>
				</div>
				<div>
					<span>Author name: </span>
					<span><strong>{{ fileProperty.copyrightDisplayname }}</strong></span>
				</div>
				<div>
					<span>Owner name: </span>
					<span><strong>{{ fileProperty.ownerDisplayname }}</strong></span>
				</div>
				<div>
					<span>Status: </span>
					<span><strong>{{ fileProperty.status }}</strong></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from '@nextcloud/axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { generateUrl } from '@nextcloud/router'
import { showSuccess } from '@nextcloud/dialogs'
import { getCurrentUser } from '@nextcloud/auth'

export default {
	name: 'TabContent',
	components: {
	  vSelect,
	},
	data() {
		return {
			loading: true,
			fileInfo_: null,
			observer: null,
			limit: 10,
			search: null,
			options: [],
			totalResults: 0,
			selected: null,
			page: 1,
			pageSize: 10,
			fileProperty: {},
			searchTimeout: null,
		}
	},
	computed: {
		filtered() {
			return this.options.filter(option =>
				option.nameProp.toLowerCase().includes(this.search.toLowerCase())
			)
		},
		paginated() {
			return this.options.slice(0, this.limit)
		},
		hasNextPage() {
			return this.options.length < this.totalResults
		},
	},
	watch: {
		fileInfo_(newVal) {
			if (newVal) {
				this.resetComponent()
				this.getFileProperty()
			}
		},
	},
	mounted() {
		this.observer = new IntersectionObserver(this.infiniteScroll)
		this.getFileProperty()
	},
	methods: {
		async updateFileInfo(fileInfo) {
			if (fileInfo) {
				this.fileInfo_ = fileInfo
				await this.getFileProperty()
			}
		},
		async addFileProperty() {
			const url = generateUrl('/apps/tstt/create-file-property')
			const file = {
				objectId: this.fileInfo_.id,
				itId: this.selected,
			}
			await axios.post(url, { file })
			showSuccess(this.t('customproperties', 'New Intellectual Property has been added to this file!'))
			this.getFileProperty()
		},
		async addFolderProperty() {
			const fileinfo = {
				uid: getCurrentUser().uid,
				filepath: this.$root.fileInfo.path,
				filename: this.$root.fileInfo.name,
			}
			const url = generateUrl('/apps/tstt/list-files-in-folder')
			const file = Object.entries(this.fileInfo_)
			const res = await axios.put(url, { fileinfo })
		},
		async deleteFileProperty() {
			const objectId = this.fileInfo_.id
			const url = generateUrl(`/apps/tstt/delete-file-property/${objectId}`)
			await axios.delete(url)
			showSuccess(this.t('customproperties', 'Intellectual Property has been deleted from this file!'))
			this.getFileProperty()
			this.resetComponent()
		},
		async getFileProperty() {
			const url = generateUrl(`/apps/tstt/index-file-property/${this.fileInfo_.id}`)
			try {
				const res = await axios.get(url)
				this.fileProperty = res.data || {
					nameProp: '',
					copyrightDisplayname: '',
					ownerDisplayname: '',
				}
			} catch (e) {
				console.error(e)
			}
		},
		async onOpen() {
			if (this.options.length === 0) {
				await this.loadOptions()
			}
			if (this.hasNextPage) {
				await this.$nextTick()
				this.observer.observe(this.$refs.load)
			}
		},
		onClose() {
			this.observer.disconnect()
		},
		async onSearch(query) {
			this.search = query
			this.page = 1
			this.limit = this.pageSize
			if (this.searchTimeout) {
				clearTimeout(this.searchTimeout)
			}
			this.searchTimeout = setTimeout(() => {
				this.loadOptions(true)
			}, 1000)
		},
		async loadOptions(reset = false) {
			if (reset) {
				this.options = []
				this.page = 1
			}
			try {
				const url = generateUrl('/apps/tstt/index-intellectual-property')
				const params = {
					page: this.page,
					pageSize: this.pageSize,
					query: this.search,
				}
				const res = await axios.get(url, { params })
				const newOptions = res.data.data.filter(option => !this.options.some(existingOption => existingOption.id === option.id))
				if (res.data && res.data.data) {
					this.options = [...this.options, ...newOptions]
					this.totalResults = res.data.total
					this.page += 1
				}
			} catch (error) {
				console.error('Failed to load options:', error)
			}
		},
		async infiniteScroll(entries) {
			const entry = entries[0]
			if (entry.isIntersecting && this.hasNextPage) {
				this.observer.disconnect()
				const scrollTop = entry.target.offsetParent ? entry.target.offsetParent.scrollTop : 0
				await this.loadOptions()
				await this.$nextTick()
				if (entry.target.offsetParent) {
					entry.target.offsetParent.scrollTop = scrollTop
				}
				if (this.hasNextPage) {
					this.observer.observe(this.$refs.load)
				}
			}
		},
		resetComponent() {
			this.loading = true
			this.options = []
			this.totalResults = 0
			this.selected = null
			this.page = 1
			this.fileProperty = {
				nameProp: '',
				copyrightDisplayname: '',
				ownerDisplayname: '',
			}
		},
	},
}
</script>

<style>
#select-tstt {
	width: 100%;
}
#select-tstt > ul {
	width: 100%;
	overflow-y: auto;
}
#select-tstt > div {
	width: 100%;
}
.loader {
	text-align: center;
	padding: 10px;
}
</style>
