<template>
	<div>
		<NcButton type="secondary" @click="showModal">
			<template #icon>
				<FilterOutline :size="20" />
			</template>
		</NcButton>
<<<<<<< HEAD
		<div v-if="show" class="modal-container" @click="handleOutsideClick">
=======

		<div v-if="show" class="modal-container">
>>>>>>> 754af851 ([1] Asset Management)
			<div class="modal-content">
				<div class="modal-header">
					<p style="font-weight: 800;">
						{{ t('files', 'Filter') }}
					</p>
					<NcButton type="tertiary-no-background" @click="hide">
						<template #icon>
							<Close :size="20" />
						</template>
					</NcButton>
				</div>
<<<<<<< HEAD
=======

>>>>>>> 754af851 ([1] Asset Management)
				<template>
					<div class="form-select">
						<div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
							<div>
<<<<<<< HEAD
								<label>{{ t('files', 'Author') }}</label>
								<Multiselect v-model="selectedAuthors"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="authorData"
									:multiple="true"
									label="displayName"
									track-by="id" />
							</div>
							<div>
								<label>{{ t('files', 'Owner') }}</label>
								<Multiselect v-model="selectedOwners"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="ownerData"
									:multiple="true"
									label="displayName"
									track-by="id" />
							</div>
							<div>
								<label>{{ t('files', 'Status') }}</label>
								<Multiselect v-model="selectedStatus"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="statusData"
									:multiple="true"
									label="status"
									track-by="id" />
=======
								<label>{{ t('files', 'Owner') }}</label>
								<Multiselect v-model="selectedOwners" :selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')" :searchable="true"
									:placeholder="t('files', 'Select option')" :options="ownerOptions" :multiple="true"
									label="name" track-by="name" />
							</div>
							<div>
								<label>{{ t('files', 'Author') }}</label>
								<Multiselect v-model="selectedAuthors" :selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')" :searchable="true"
									:placeholder="t('files', 'Select option')" :options="authorOptions" :multiple="true"
									label="name" track-by="name" />
							</div>
							<div>
								<label>{{ t('files', 'Status') }}</label>
								<Multiselect v-model="selectedStatus" :selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')" :searchable="true"
									:placeholder="t('files', 'Select option')" :options="statusOptions" :multiple="true"
									label="name" track-by="name" />
>>>>>>> 754af851 ([1] Asset Management)
							</div>
							<div style="display: flex; justify-content: end">
								<NcButton type="primary" @click="applyFilter">
									<template #icon>
										<FilterOutline :size="20" />
									</template>
									{{ t('files', 'Apply filter') }}
								</NcButton>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import FilterOutline from 'vue-material-design-icons/FilterOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import Multiselect from 'vue-multiselect'
<<<<<<< HEAD
import { mapMutations, mapState } from 'vuex'

=======
import { AssetApi } from '../../services/assetAPI.js'
import { mapMutations, mapState } from 'vuex'

const apiClient = new AssetApi()
>>>>>>> 754af851 ([1] Asset Management)
export default {
	name: 'FilterModal',
	components: {
		NcButton,
		FilterOutline,
		Multiselect,
		Close,
	},
	data() {
		return {
			show: false,
<<<<<<< HEAD
		}
	},
	computed: {
		...mapState(['selectedOwnerFilters', 'selectedStatusFilters', 'selectedAuthorFilters', 'authorData', 'ownerData', 'statusData']),
=======
			ownerOptions: [{ name: 'Owner 1', id: 1 },
			{ name: 'Owner 2', id: 2 },
			{ name: 'Owner 3', id: 3 },
			{ name: 'Owner 4', id: 4 },
			{ name: 'Owner 5', id: 5 },
			{ name: 'Owner 6', id: 6 }],
			authorOptions: [{ name: 'Author 1', id: 1 },
			{ name: 'Author 2', id: 2 },
			{ name: 'Author 3', id: 3 },
			{ name: 'Author 4', id: 4 },
			{ name: 'Author 5', id: 5 },
			{ name: 'Author 6', id: 6 }],
			statusOptions: [{ name: 'InActive', id: 1 },
			{ name: 'Active', id: 2 },
			{ name: 'Block', id: 3 },],
		}
	},

	// async mounted() {
	// 	await this.loadOptionsFromApi()
	// },
	computed: {
		...mapState(['selectedOwnerFilters', 'selectedStatusFilters', 'selectedAuthorFilters']),
>>>>>>> 754af851 ([1] Asset Management)
		selectedOwners: {
			get() {
				return this.selectedOwnerFilters
			},
			set(value) {
				this.setSelectedOwnerFilters(value)
			},
		},
		selectedStatus: {
			get() {
				return this.selectedStatusFilters
			},
			set(value) {
				this.setSelectedStatusFilters(value)
			},
		},
		selectedAuthors: {
			get() {
				return this.selectedAuthorFilters
			},
			set(value) {
				this.setSelectedAuthorFilters(value)
			},
		},
	},
	methods: {
		...mapMutations(['setSelectedOwnerFilters', 'setSelectedAuthorFilters', 'setSelectedStatusFilters', 'clearFilters']),
		showModal() {
			this.show = true
		},
		hide() {
			this.show = false
		},
<<<<<<< HEAD
		handleOutsideClick(event) {
			if (event.target.classList.contains('modal-container')) {
				this.hide()
			}
		},
		applyFilter() {
			this.hide()
		},
		clearFilter() {
			this.clearFilters()
=======
		applyFilter() {
			this.hide()
			// this.fetchData()
		},
		clearFilter() {
			this.clearFilters()
			// this.fetchData()
>>>>>>> 754af851 ([1] Asset Management)
		},
	},
}
</script>

<style scoped>
.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
<<<<<<< HEAD
=======
	background-color: transparent;
>>>>>>> 754af851 ([1] Asset Management)
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100000000000000000000;
<<<<<<< HEAD
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
=======
>>>>>>> 754af851 ([1] Asset Management)
}

.modal-content {
	background-color: white;
<<<<<<< HEAD
	padding: 50px 100px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 800px;
=======
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 600px;
>>>>>>> 754af851 ([1] Asset Management)
}

.multiple-select-container {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-select {
	display: flex;
	gap: 10px;
	align-items: center;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

@media (max-width: 600px) {
	.modal-content {
		width: max-content;
	}

	.modal-footer {
		justify-content: center;
	}

}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
