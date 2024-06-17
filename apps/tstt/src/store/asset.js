import Vue from 'vue'
import Vuex from 'vuex'
import { showError } from '../helper/errors.js'
import { AssetApi } from '../services/assetAPI.js'
import { getCurrentUser } from '@nextcloud/auth'

Vue.use(Vuex)
const apiClient = new AssetApi()

const state = {
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
}

const mutations = {
	setData(state, data) {
		state.data = data
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
	},
	setSelectedStatusFilters(state, filters) {
		state.selectedStatusFilters = filters
	},
	setSelectedAuthorFilters(state, filters) {
		state.selectedAuthorFilters = filters
	},
	clearFilters(state) {
		state.selectedOwnerFilters = []
		state.selectedStatusFilters = []
		state.selectedAuthorFilters = []
	},
	clearSearchQuery(state) {
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
	},
}

const actions = {
	async fetchAssetData({ commit, state }) {
		commit('setLoading', true)
		commit('setError', null)
		try {
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
		} catch (error) {
			commit('setError', error.message)
		} finally {
			commit('setLoading', false)
		}
	},

	async fetchDataNextPage({ commit, state }) {
		commit('setLoading', true)
		commit('setError', null)
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
		} catch (error) {
			showError(error)
			commit('setError', error.message)
		} finally {
			commit('setLoading', false)
		}
	},

	async clearAll({ commit }) {
		commit('setLoading', true)
		commit('clearSearchQuery')
		commit('clearFilters')
		await this.dispatch('fetchAssetData')
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
			context.commit('updateItem', response)
			await context.dispatch('fetchAssetData')
		} catch (error) {
			showError(error)
			console.error('Error editing item:', error)
		}
	},

	async deleteItem(context, itemId) {
		try {
			const property = {
				id: itemId,
				deletedAt: Date.now(),
				deletedBy: getCurrentUser().uid,
			}
			await apiClient.deleteAsset(property)
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
				deletedAt: null,
				deletedBy: null,
				updatedAt: null,
				updatedBy: null,
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
	},

	async getAuthorData(context) {
		context.commit('setLoading', true)
		try {
			const response = await apiClient.getAuthor()
			context.commit('setAuthorData', response)
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
			context.commit('setOwnerData', response)
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

const store = new Vuex.Store({
	state,
	mutations,
	actions,
})

export default store
