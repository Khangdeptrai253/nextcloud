import Vue from 'vue'
import Vuex from 'vuex'
import { showError } from '../helper/errors.js'
import { AssetApi } from '../services/assetAPI.js'
import { getCurrentUser } from '@nextcloud/auth'

Vue.use(Vuex)
const apiClient = new AssetApi()

const state = {
<<<<<<< HEAD
	data: {},
	loading: false,
	error: null,
	searchQuery: null,
	selectedOwnerFilters: [],
	selectedStatusFilters: [],
	selectedAuthorFilters: [],
	ownerData: [],
	authorData: [],
	statusData: [],
	currentPage: 1,
	totalPages: 1,
	pageSize: 8,
=======
	data: [],
	loading: false,
	error: null,
	searchQuery: '',
	selectedOwnerFilters: [],
	selectedStatusFilters: [],
	selectedAuthorFilters: [],
	currentPage: 1,
	totalPages: 1,
	pageSize: 10,
>>>>>>> 754af851 ([1] Asset Management)
}

const mutations = {
	setData(state, data) {
		state.data = data
<<<<<<< HEAD
=======

>>>>>>> 754af851 ([1] Asset Management)
	},
	setLoading(state, loading) {
		state.loading = loading
	},
	setError(state, error) {
		state.error = error
	},
	setSearchQuery(state, query) {
		state.searchQuery = query
	},
	setSelectedOwnerFilters(state, filters) {
		state.selectedOwnerFilters = filters
<<<<<<< HEAD
=======

>>>>>>> 754af851 ([1] Asset Management)
	},
	setSelectedStatusFilters(state, filters) {
		state.selectedStatusFilters = filters
	},
<<<<<<< HEAD
	setSelectedAuthorFilters(state, filters) {
		state.selectedAuthorFilters = filters
	},
=======

	setSelectedAuthorFilters(state, filters) {
		state.selectedAuthorFilters = filters
	},

>>>>>>> 754af851 ([1] Asset Management)
	clearFilters(state) {
		state.selectedOwnerFilters = []
		state.selectedStatusFilters = []
		state.selectedAuthorFilters = []
	},
	clearSearchQuery(state) {
<<<<<<< HEAD
		state.searchQuery = null
	},
	setCurrentPage(state, page) {
		state.currentPage = page
	},
	setTotalPages(state, totalPages) {
		state.totalPages = totalPages
	},
	setPageSize(state, pageSize) {
		state.pageSize = pageSize
	},
	setAuthorData(state, authorData) {
		state.authorData = authorData
	},
	setOwnerData(state, ownerData) {
		state.ownerData = ownerData
	},
	setStatusData(state, statusData) {
		state.statusData = statusData
=======
		state.searchQuery = ''
	},
	setCurrentPage(state, page) {
		state.currentPage = page;
	},
	setTotalPages(state, totalPages) {
		state.totalPages = totalPages;
	},
	setPageSize(state, pageSize) {
		state.pageSize = pageSize;
>>>>>>> 754af851 ([1] Asset Management)
	},
}

const actions = {
	async fetchAssetData({ commit, state }) {
		commit('setLoading', true)
		commit('setError', null)
		try {
<<<<<<< HEAD
			const { searchQuery, selectedOwnerFilters, selectedStatusFilters, selectedAuthorFilters, pageSize } = state
			const arrayOwner = selectedOwnerFilters.map(filter => filter.id)
			const arrayAuthor = selectedAuthorFilters.map(filter => filter.id)
			const statusId = selectedStatusFilters.map(filter => filter.id)
			const body = {
				page: 1,
				pageSize,
				ownerSort: arrayOwner?.length ? arrayOwner : null,
				authorSort: arrayAuthor?.length ? arrayAuthor : null,
				statusSort: statusId?.length ? statusId : null,
				query: searchQuery,
			}
			const data = await apiClient.getDataAsset(body)
			state.currentPage = 1
			commit('setData', data)
			commit('setTotalPages', data.total)
			commit('setPageSize', state.pageSize)
			commit('setCurrentPage', state.currentPage)
=======
			const body = {
				page: 1,
				pageSize: state.pageSize
			}
			const data = await apiClient.fetchAssets(body)
			commit('setData', data)
			commit('setTotalPages', data.total)

>>>>>>> 754af851 ([1] Asset Management)
		} catch (error) {
			commit('setError', error.message)
		} finally {
			commit('setLoading', false)
		}
	},

	async fetchDataNextPage({ commit, state }) {
		commit('setLoading', true)
		commit('setError', null)
<<<<<<< HEAD
		const { searchQuery, selectedOwnerFilters, selectedStatusFilters, selectedAuthorFilters, currentPage, pageSize } = state
		const arrayOwner = selectedOwnerFilters.map(filter => filter.id)
		const arrayAuthor = selectedAuthorFilters.map(filter => filter.id)
		const statusId = selectedStatusFilters.map(filter => filter.id)
		const body = {
			page: currentPage + 1,
			pageSize,
			ownerSort: arrayOwner?.length ? arrayOwner : null,
			authorSort: arrayAuthor?.length ? arrayAuthor : null,
			statusSort: statusId?.length ? statusId : null,
			query: searchQuery,
		}
		try {
			const data = await apiClient.getDataAsset(body)
=======
		const body = {
			page: state.currentPage + 1,
			pageSize: state.pageSize
		}
		try {
			const data = await apiClient.fetchAssets(body)
>>>>>>> 754af851 ([1] Asset Management)
			commit('setData', data)
			commit('setCurrentPage', state.currentPage + 1)
			commit('setTotalPages', data.total)
		} catch (error) {
			showError(error)
			commit('setError', error.message)
		} finally {
			commit('setLoading', false)
		}
	},

	async fetchDataPrevPage({ commit, state }) {
		commit('setLoading', true)
		commit('setError', null)
<<<<<<< HEAD
		const { searchQuery, selectedOwnerFilters, selectedStatusFilters, selectedAuthorFilters, currentPage, pageSize } = state
		const arrayOwner = selectedOwnerFilters.map(filter => filter.id)
		const arrayAuthor = selectedAuthorFilters.map(filter => filter.id)
		const statusId = selectedStatusFilters.map(filter => filter.id)
		const body = {
			page: currentPage - 1,
			pageSize,
			ownerSort: arrayOwner?.length ? arrayOwner : null,
			authorSort: arrayAuthor?.length ? arrayAuthor : null,
			statusSort: statusId?.length ? statusId : null,
			query: searchQuery,
		}
		try {
			const data = await apiClient.getDataAsset(body)
			commit('setData', data)
			commit('setCurrentPage', state.currentPage - 1)
			commit('setTotalPages', data.total)
=======
		const body = {
			page: state.currentPage - 1,
			pageSize: state.pageSize
		}
		try {
			const data = await apiClient.fetchAssets(body)
			commit('setData', data)
			commit('setCurrentPage', state.currentPage - 1)
			commit('setTotalPages', data.totalPages)
>>>>>>> 754af851 ([1] Asset Management)
		} catch (error) {
			showError(error)
			commit('setError', error.message)
		} finally {
			commit('setLoading', false)
		}
	},

<<<<<<< HEAD
=======
	async searchFullTextAsset({ state, commit }) {
		commit('setLoading', true);
		commit('setError', null);
		try {
			const { searchQuery, selectedOwnerFilters, selectedStatusFilters, selectedAuthorFilters } = state;
			const arrayOwner = selectedOwnerFilters.map(filter => filter.id);
			const arrayAuthor = selectedAuthorFilters.map(filter => filter.id);
			const statusId = selectedStatusFilters.map(filter => filter.id);

			const body = {
				searchQuery, arrayOwner, statusId, arrayAuthor
			};
			const data = await apiClient.searchFullTextAsset(body);
			commit('setData', data);
		} catch (error) {
			showError(error);
			commit('setError', error.message);
		} finally {
			commit('setLoading', false);
		}
	},

>>>>>>> 754af851 ([1] Asset Management)
	async clearAll({ commit }) {
		commit('setLoading', true)
		commit('clearSearchQuery')
		commit('clearFilters')
		await this.dispatch('fetchAssetData')
<<<<<<< HEAD
		commit('setLoading', false)
	},

	async editItem(context, item) {
		try {
			const property = {
				...item,
				updatedAt: Date.now(),
				updatedBy: getCurrentUser().uid,
			}
			const response = await apiClient.editAsset(property)

			if (response.status === 'error') {
				showError(response)
				console.error('Error editing item:', response.message)
			}
=======
		commit('setLoading', false);
	},
	async editItem(context, item) {
		try {
			item.updatedAt = Date.now()
			item.updatedBy = getCurrentUser().uid
			const response = await apiClient.editAsset(item)
>>>>>>> 754af851 ([1] Asset Management)
			context.commit('updateItem', response)
			await context.dispatch('fetchAssetData')
		} catch (error) {
			showError(error)
			console.error('Error editing item:', error)
		}
	},

	async deleteItem(context, itemId) {
		try {
<<<<<<< HEAD
			const property = {
				id: itemId,
				deletedAt: Date.now(),
				deletedBy: getCurrentUser().uid,
			}
			const response = await apiClient.deleteAsset(property)
			if (response.status === 'error') {
				showError(response)
				console.error('Error editing item:', response.message)
			}
=======
			const body = {
				id: itemId,
				deletedAt: Date.now(),
				deletedBy: getCurrentUser().uid
			}
			console.log(body);
			await apiClient.deleteAsset(body)
>>>>>>> 754af851 ([1] Asset Management)
			await context.dispatch('fetchAssetData')
		} catch (error) {
			showError(error)
			console.error('Error deleting item:', error)
		}
	},

	async addItem(context, item) {
		context.commit('setLoading', true)
		try {
			const body = {
				...item,
				createdAt: Date.now(),
				createdBy: getCurrentUser().uid,
<<<<<<< HEAD
=======
				deletedAt: null,
				deletedBy: null,
				updatedAt: null,
				updatedBy: null
>>>>>>> 754af851 ([1] Asset Management)
			}
			const response = await apiClient.createAsset(body)
			context.commit('createAsset', response.data)
		} catch (error) {
			showError(error)
			context.commit('setError', error.message)
		} finally {
			context.dispatch('fetchAssetData')
			context.commit('setLoading', false)
		}
<<<<<<< HEAD
	},

	async getAuthorData(context) {
		context.commit('setLoading', true)
		try {
			const response = await apiClient.getAuthor()
			const authorData = computeData(response)
			context.commit('setAuthorData', authorData)
		} catch (error) {
			showError(error)
			context.commit('setError', error.message)
		} finally {
			context.dispatch('fetchAssetData')
			context.commit('setLoading', false)
		}
	},

	async getOwnerData(context) {
		context.commit('setLoading', true)
		try {
			const response = await apiClient.getOwner()
			const ownerData = computeData(response)
			context.commit('setOwnerData', ownerData)
		} catch (error) {
			showError(error)
			context.commit('setError', error.message)
		} finally {
			context.dispatch('fetchAssetData')
			context.commit('setLoading', false)
		}
	},

	async getStatusData(context) {
		const statusData = [
			{ status: 'Active', id: 1 },
			{ status: 'Inactive', id: 2 },
			{ status: 'Out of Date', id: 3 },
		]
		context.commit('setStatusData', statusData)
	},
}

function computeData(response) {
	return Object.keys(response).map(key => {
		return {
			id: response[key].uid,
			displayName: response[key].displayname,
		}
	})
=======
	}

>>>>>>> 754af851 ([1] Asset Management)
}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
})

export default store
