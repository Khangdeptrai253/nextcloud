<template>
	<div class="container w-100">
		<div class="header-flex">
			<div class="header-flex__search">
				<NewModal />
				<FilterModal />
				<SearchForm />
			</div>
			<DownloadForm />
		</div>
		<template>
<<<<<<< HEAD
			<TableAsset :data="data"
				:headers="tableHeaders"
				:actions="tableActions"
				:next-page="fetchDataNextPage"
				:prev-page="fetchDataPrevPage" />
		</template>
		<portal-target name="destination" />
=======
			<TableAsset :data="data" :headers="tableHeaders" :actions="tableActions" :nextPage="fetchDataNextPage"
				:prevPage="fetchDataPrevPage" />
		</template>
		<portal-target name="destination">
		</portal-target>
>>>>>>> 754af851 ([1] Asset Management)
	</div>
</template>

<script>
import FilterModal from '../components/ModalComponent/FilterModal.vue'
import NewModal from '../components/ModalComponent/NewModal.vue'
<<<<<<< HEAD
import SearchForm from '../components/SearchForm.vue'
import TableAsset from '../components/Table/TableAsset.vue'
import { mapState, mapActions } from 'vuex'
=======

import SearchForm from '../components/SearchForm.vue'
import TableAsset from '../components/Table/TableAsset.vue'
import { mapState, mapActions } from 'vuex'
import FileEditOutline from 'vue-material-design-icons/FileEditOutline.vue'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'
import EyeOutline from 'vue-material-design-icons/EyeOutline.vue'
>>>>>>> 754af851 ([1] Asset Management)
import DeleteModal from './ModalComponent/DeleteModal.vue'
import ViewModal from './ModalComponent/ViewModal.vue'
import EditModal from './ModalComponent/EditModal.vue'
import DownloadForm from './DownloadForm.vue'
import { showError } from '../helper/errors.js'
<<<<<<< HEAD

=======
>>>>>>> 754af851 ([1] Asset Management)
export default {
	name: 'AssetPage',
	components: {
		TableAsset,
<<<<<<< HEAD
		SearchForm,
		FilterModal,
		DownloadForm,
		NewModal,
=======
		DeleteOutline,
		EyeOutline,
		FileEditOutline,
		ViewModal,
		DeleteModal,
		EditModal,
		SearchForm,
		FilterModal,
		DownloadForm,
		NewModal
>>>>>>> 754af851 ([1] Asset Management)
	},
	data() {
		return {
			tableHeaders: [
				{ label: t('files', 'Name'), value: 'nameProp' },
<<<<<<< HEAD
				{ label: t('files', 'Author'), value: 'copyrightDisplayname' },
				{ label: t('files', 'Owner'), value: 'ownerDisplayname' },
=======
				{ label: t('files', 'Author'), value: 'copyright' },
				{ label: t('files', 'Owner'), value: 'owner' },
>>>>>>> 754af851 ([1] Asset Management)
				{ label: t('files', 'Status'), value: 'status' },
				{ label: t('files', 'UpdatedAt'), value: 'updatedAt' },
				{ label: t('files', 'Version'), value: 'version' },
			],
			tableActions: [
				{
					modalComponent: DeleteModal,
				}, {
					modalComponent: ViewModal,
				}, {
					modalComponent: EditModal,
				},

			],
		}
	},
	computed: {
		...mapState({
			data: 'data',
			loading: 'loading',
			error: 'error',
		}),
	},
<<<<<<< HEAD
=======
	methods: {
		...mapActions({
			fetchData: 'fetchAssetData',
			fetchDataNextPage: 'fetchDataNextPage',
			fetchDataPrevPage: 'fetchDataPrevPage',
		}),
	},
>>>>>>> 754af851 ([1] Asset Management)
	async mounted() {
		try {
			await this.fetchData()
		} catch (error) {
			showError(error)
			console.error(error)
		}
	},
<<<<<<< HEAD
	methods: {
		...mapActions({
			fetchData: 'fetchAssetData',
			fetchDataNextPage: 'fetchDataNextPage',
			fetchDataPrevPage: 'fetchDataPrevPage',
		}),
	},
}
=======
}

>>>>>>> 754af851 ([1] Asset Management)
</script>

<style scoped>
.container {
	margin-left: 10px;
	width: 98%;
	height: 100%;
}

.header__search__filter {
	display: flex;
	gap: 10px;
	align-items: center;
}

.header-region {
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
}

.header-flex {
	position: -webkit-sticky;
	position: sticky;
	top: 5px;
	background: white;
	z-index: 1000;
	margin-left: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	margin-top: 4px;
}

.header-flex__search {
	margin-left: 10px;
	display: flex;
	justify-content: space-around;
	gap: 10px;
}
</style>
