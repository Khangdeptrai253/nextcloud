<template lang="">
	<div>
		<NcButton type="tertiary-no-background" @click="showModal">
			<template #icon>
				<EyeOutline :size="20" />
			</template>
{{t('files','Details')}}
</NcButton>
<portal to="destination">
	<div v-if="show" class="modal-container">
		<div class="modal-content">
			<div class="modal-header" style="margin-bottom:5px">
				<p>
					{{ t('files', 'Details') }}
				</p>
				<div class="close-button">
					<NcButton type="tertiary-no-background" @click="hide">
						<template #icon>
								<Close :size="20" />
							</template>
					</NcButton>
				</div>
			</div>

			<template>
					<table class="data-table">
						<thead>
							<tr>
								<th>{{ t('files', 'Name') }}</th>
								<th>{{ t('files', 'Owner') }}</th>
								<th>{{ t('files', 'Status') }}</th>
								<th>{{ t('files', 'Version') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr style="	max-width: 200px;
	word-wrap: break-word;
	word-break: break-all;
	white-space: normal;">
								<td>{{ item.nameProp }}</td>
								<td>{{ item.owner }}</td>
								<td>{{ item.status }}</td>
								<td>{{ item.version }}</td>
							</tr>
						</tbody>
					</table>
				</template>
		</div>
	</div>
</portal>
</div>
</template>
<script>

import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import EyeOutline from 'vue-material-design-icons/EyeOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import { mapActions } from 'vuex'

export default {
	name: 'ViewModal',
	components: {
		NcButton, EyeOutline, Close,
	},
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			show: false,
		}
	},
	mounted() {
	},
	methods: {
		...mapActions(['filterData', 'fetchData']),
		showModal() {
			this.show = true
		},
		hide() {
			this.show = false
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
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100000000000;
}

.modal-content {
	position: relative;
	background-color: white;
	padding: 20px;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 600px;
}

.close-button {
	position: absolute;
	top: 0;
	right: 0
}

.modal-header p {
	font-weight: bolder;
	font-size: 18px;
}

.form-select {
	display: flex;
	gap: 10px;
	align-items: center
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.table-container {
	overflow-x: auto;
}

.data-table {
	width: 100%;
	border-collapse: collapse;
}

.data-table th,
.data-table td {
	padding: 8px;
	text-align: left;
}

.data-table th {
	background-color: #f2f2f2;
}

.data-table tr:nth-child(even) {
	background-color: #f2f2f2;
}
</style>
