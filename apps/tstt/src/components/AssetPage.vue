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
			<TableAsset :data="data"
				:headers="tableHeaders"
				:actions="tableActions"
				:next-page="fetchDataNextPage"
				:prev-page="fetchDataPrevPage" />
		</template>
		<portal-target name="destination" />
	</div>
</template>

<script>
import FilterModal from '../components/ModalComponent/FilterModal.vue'
import NewModal from '../components/ModalComponent/NewModal.vue'
import SearchForm from '../components/SearchForm.vue'
import TableAsset from '../components/Table/TableAsset.vue'
import { mapState, mapActions } from 'vuex'
import DeleteModal from './ModalComponent/DeleteModal.vue'
import ViewModal from './ModalComponent/ViewModal.vue'
import EditModal from './ModalComponent/EditModal.vue'
import DownloadForm from './DownloadForm.vue'
import { showError } from '../helper/errors.js'

export default {
	name: 'AssetPage',
	components: {
		TableAsset,
		ViewModal,
		DeleteModal,
		EditModal,
		SearchForm,
		FilterModal,
		DownloadForm,
		NewModal,
	},
	data() {
		return {
			tableHeaders: [
				{ label: t('files', 'Name'), value: 'nameProp' },
				{ label: t('files', 'Author'), value: 'copyrightDisplayname' },
				{ label: t('files', 'Owner'), value: 'ownerDisplayname' },
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
	methods: {
		...mapActions({
			fetchData: 'fetchAssetData',
			fetchDataNextPage: 'fetchDataNextPage',
			fetchDataPrevPage: 'fetchDataPrevPage',
		}),
	},
	async mounted() {
		try {
			await this.fetchData()
		} catch (error) {
			showError(error)
			console.error(error)
		}
	},
}
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
