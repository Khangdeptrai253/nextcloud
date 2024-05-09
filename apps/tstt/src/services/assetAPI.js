import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'

export class AssetApi {

	async createAsset(property) {
		const endpoint = generateUrl('/apps/tstt/create-intellectual-property')
		const response = await axios.post(endpoint, { property })

		return response.data
	}

	async getDataAsset(keyword) {
		const endpoint = generateUrl('/apps/tstt/index-intellectual-property')
		const params = {
			page: keyword.page,
			pageSize: keyword.pageSize,
			ownerListSort: keyword.ownerSort,
			authorListSort: keyword.authorSort,
			statusListSort: keyword.statusSort,
			query: keyword.query,
		}
		const response = await axios.get(endpoint, { params })

		return response.data
	}

	async editAsset(property) {
		const endpoint = generateUrl('/apps/tstt/update-intellectual-property')
		const response = await axios.put(endpoint, { property })

		return response.data
	}

	async deleteAsset(property) {
		const endpoint = generateUrl('/apps/tstt/delete-intellectual-property')
		const response = await axios.put(endpoint, { property })

		return response.data
	}

	async getOwner() {
		const owner = 'Owner'
		const urlOwner = generateUrl(`/apps/tstt/get-group-user-detail/${owner}`)
		const resOwner = await axios.get(urlOwner)

		return resOwner.data
	}

	async getAuthor() {
		const author = 'Author'
		const urlAuthor = generateUrl(`/apps/tstt/get-group-user-detail/${author}`)
		const resAuthor = await axios.get(urlAuthor)

		return resAuthor.data
	}

}
