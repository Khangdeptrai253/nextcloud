<template>
	<div class="container">
		<h1>
			Danh sách tài sản trí tuệ
		</h1>
		<button @click="openModal">
			ADD TSTT
		</button>
		<div v-if="showModal" class="modal" @click="handleOutsideClick">
			<div class="modal-content">
				<span class="close" @click="closeModal">&times;</span>
				<div>
					<!-- Nội dung của modal -->
					<h2>Thêm tài sản trí tuệ</h2>
					<p>Đây là nội dung của modal</p>
				</div>
			</div>
		</div>
		<div v-if="dataLoaded">
			<table id="assetTable" class="display" style="width:100%">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Copyright</th>
						<th>Owner</th>
						<th>Status</th>
						<th>Version</th>
						<th>Created By</th>
						<th>Updated By</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tableData" :key="item.id">
						<td>{{ item.id }}</td>
						<td>{{ item.nameProp }}</td>
						<td>{{ item.copyright }}</td>
						<td>{{ item.owner }}</td>
						<td>{{ item.status }}</td>
						<td>{{ item.version }}</td>
						<td>{{ item.createdBy }}</td>
						<td>{{ item.updatedBy }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else>
			<p>Data is loading ...</p>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import 'datatables.net'
import 'datatables.net-dt/css/dataTables.dataTables.css'
import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
// import { showError, showSuccess } from '@nextcloud/dialogs'

export default {
	name: 'AssetPage',
	data() {
		return {
			tableData: [],
			dataTable: null,
			dataLoaded: false,
			showModal: false,
		}
	},
	mounted() {
		this.getIntellectualProperty()
	},
	methods: {
		initializeDataTable() {
			$(this.$el).find('#assetTable').DataTable({
				paging: true,
				searching: true,
				ordering: true,
				info: true,
			})
		},
		async getIntellectualProperty() {
			const url = generateUrl('/apps/tstt/index-intellectual-property')
			const res = await axios.get(url)
			this.tableData = res.data
			this.dataLoaded = true
			this.$nextTick(() => {
				if (this.dataTable) {
					this.dataTable.destroy()
				}
				this.initializeDataTable()
			})
		},
		openModal() {
			this.showModal = true
		},
		closeModal() {
			this.showModal = false
		},
		handleOutsideClick(event) {
			if (event.target.classList.contains('modal')) {
				this.closeModal()
			}
		},
	},
}
</script>

<style scoped>
.container {
	padding: 10px;
	margin-top: 20px;
	width: 100%;
	height: 100%;
}
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
