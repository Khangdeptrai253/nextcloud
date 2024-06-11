import axios from '@nextcloud/axios'
const fakeData = {
	data: [
		{
			id: 31,
			nameProp: 'Hanh trang chiện buồn hay vui Hanh trang chiện buồn hay vui',
			copyright: 'Phuc Vinh',
			owner: 'Dat G',
			status: 'active',
			version: '1.1',
			createdAt: 1717585105619,
			updatedAt: 1717608854956,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 32,
			nameProp: 'Ban quyen Mot chang trai',
			copyright: 'Phuc Vinh',
			owner: 'Son Tung',
			status: 'inactive',
			version: '1.2',
			createdAt: 1717586273137,
			updatedAt: 1717586273137,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 33,
			nameProp: 'Ban quyen Khong phai dang vua',
			copyright: 'Duc Khang',
			owner: 'Anh Do Mixue',
			status: 'active',
			version: '1.0',
			createdAt: 1717586315234,
			updatedAt: 1717586315234,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 34,
			nameProp: 'Lac Troi',
			copyright: 'Tuan Hung',
			owner: 'Noo Phuoc Thinh',
			status: 'inactive',
			version: '2.1',
			createdAt: 1717586420000,
			updatedAt: 1717608854956,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 35,
			nameProp: 'Chay ngay di',
			copyright: 'Bui Anh Tuan',
			owner: 'Son Tung',
			status: 'active',
			version: '1.3',
			createdAt: 1717586520000,
			updatedAt: 1717586520000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 36,
			nameProp: 'Em gai mua',
			copyright: 'Trinh Thang Binh',
			owner: 'Hoang Thuy Linh',
			status: 'active',
			version: '1.4',
			createdAt: 1717586620000,
			updatedAt: 1717586620000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 37,
			nameProp: 'Dung ai nhac ve anh ay',
			copyright: 'Miu Le',
			owner: 'Huong Tram',
			status: 'inactive',
			version: '1.5',
			createdAt: 1717586720000,
			updatedAt: 1717586720000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 38,
			nameProp: 'Hong Kong 1',
			copyright: 'Phuc Vinh',
			owner: 'Nguyen Tran Trung Quan',
			status: 'active',
			version: '1.6',
			createdAt: 1717586820000,
			updatedAt: 1717586820000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 39,
			nameProp: 'Chi Can Anh Noi',
			copyright: 'JustaTee',
			owner: 'Emily',
			status: 'inactive',
			version: '1.7',
			createdAt: 1717586920000,
			updatedAt: 1717586920000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
		{
			id: 40,
			nameProp: 'Anh Nho Em',
			copyright: 'Erik',
			owner: 'Minh Hang',
			status: 'active',
			version: '1.8',
			createdAt: 1717587020000,
			updatedAt: 1717587020000,
			deletedAt: null,
			createdBy: 'admin',
			updatedBy: 'admin',
			deletedBy: null,
		},
	],
	total: 20,
}

export class AssetApi {

	url(url) {
		return window.location.origin + `/apps/tstt${url}`
	}

	async fetchAssets(body) {
		// TODO: replace endpoint get page asset
		// const endpoint = ''
		// const response = await axios({
		// 	method: 'GET',
		// 	url: this.url(endpoint),
		// })
		const response = fakeData
		return response
	}


	async loadAuthor() {
		// TODO: replace endpoint get Author
		const endpoint = ''
		const response = await axios({
			method: 'GET',
			url: this.url(endpoint),
		})
		return response.data
	}

	async loadOwner() {
		// TODO: replace endpoint get Owner
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
			data: body,
		})
		return response.data
	}

	async searchFullTextAsset(keyword) {
		const endpoint = ''
		const response = await axios({
			method: 'GET',
			url: this.url(endpoint),
			body: keyword
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
