import axios from '@nextcloud/axios'

export class AssetApi {

	url(url) {
		return window.location.origin + `/apps/tstt${url}`
	}


	async loadAuthor() {
		// TODO: api get author
		const endpoint = ''
		const response = await axios({
			method: 'GET',
			url: this.url(endpoint),
		})
		return response.data
	}

	async loadOwner() {
		// TODO: api get author
		const endpoint = ''
		const response = await axios({
			method: 'GET',
			url: this.url(endpoint),
		})
		return response.data
	}

	async createAsset(body) {
		const endpoint = '/create-intellectual-property'
		const response = await axios({
			method: 'POST',
			url: this.url(endpoint),
			body: body,
		})
		return response.data
	}

	async getDataAsset(keyword) {
		const endpoint = '/index-intellectual-property'
		const response = await axios({
			method: 'GET',
			url: this.url(endpoint),
			params: keyword
		})
		return response.data
	}

	async editAsset(body) {
		const endpoint = '/update-intellectual-property'
		const response = await axios({
			method: 'PUT',
			url: this.url(endpoint),
			body: body
		})
		return response.data
	}

	async deleteAsset(body) {
		const endpoint = '/delete-intellectual-property'
		const response = await axios({
			method: 'PUT',
			url: this.url(endpoint),
			body: body
		})
		return response.data
	}

}
