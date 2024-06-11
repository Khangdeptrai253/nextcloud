<template>
	<div class="table-container">
		<div v-if="loading" class="loading-spinner">
			<span class="icon-loading" />
		</div>
		<div v-else>
			<table id="assetTable" class="table-asset" style="width:100%">
				<thead class="table-header">
					<tr class="table-header__row">
						<th v-for="(header, index) in headers" :key="index" :class="{ 'column-hide': index != 0 }"
							@click="sortTable(header.value)">
							<div
								style="display: flex; align-items: center; justify-content: space-between; padding:3px">
								<span>{{ header.label }}</span>
								<span v-if="!sortedBy" class="sort-indicator icon-triangle-s" />
								<span v-if="sortedBy === header.value" style="font-size: 8px;">
									{{ sortOrder === 'asc' ? '▲' : '▼' }}
								</span>
							</div>
						</th>
						<th v-if="actions.length" style="text-align: center;" />
					</tr>
				</thead>
				<tbody class="table-body">
					<tr v-for="(item, index) in sortedData" :key="item.id" :class="{ 'first-row': index === 0 }">
						<td v-for="(header, index) in headers" :key="index" :class="{ 'column-hide': index != 0 }">
							<span v-if="header.value === 'updatedAt'">
								{{ formatTimestamp(item[header.value]) }}
							</span>
							<span v-else>
								{{ item[header.value] }}
							</span>
						</td>
						<template>
							<td v-if="actions.length" class="row-action">
								<RowAction :actions="actions" :item="item" />

							</td>
						</template>
					</tr>
				</tbody>
				<div class="table-navigation">
					<NcButton type="tertiary" @click="prevPage" :disabled="currentPage === 1">
						<template #icon>
							<ChevronLeft :size="20" />
						</template>
					</NcButton>
					<span>{{ currentPage }} / {{ data.total }}</span>
					<NcButton type="tertiary" @click="nextPage" :disabled="currentPage === data.total">
						<template #icon>
							<ChevronRight :size="20" />
						</template>
					</NcButton>
				</div>
			</table>
		</div>
	</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import TableAction from './TableAction.vue'
import NcPopoverMenu from '@nextcloud/vue/dist/Components/NcPopoverMenu.js'
import { formatTimestamp } from '../../helper/formatTimestamp.js'
import { mapState } from 'vuex'
import RowAction from './RowAction.vue';
export default {
	name: 'TableAsset',
	components: {
		NcButton,
		ChevronLeft,
		ChevronRight,
		TableAction,
		DotsHorizontal,
		NcPopoverMenu,
		RowAction
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
		nextPage: {
			type: Function,
			required: true,
		},
		prevPage: {
			type: Function,
			required: true,
		},
		actions: {
			type: Array,
			required: false,
			default: () => [],
		},
		headers: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			openedMenu: false,
			pageSize: 10,
			selectedRow: null,
			isModalVisible: false,
			currentModal: null,
			sortedBy: null,
			sortOrder: 'asc',
			windowWidth: window.innerWidth,
			dropdownOpen: false,
			clickOutsideListener: null,
		}
	},
	computed: {
		...mapState({
			loading: 'loading',
			currentPage: 'currentPage'
		}),

		sortedData() {
			if (!this.sortedBy) {
				return this.data.data
			}
			return this.data.data.slice().sort((a, b) => {
				if (a[this.sortedBy] < b[this.sortedBy]) return this.sortOrder === 'asc' ? -1 : 1
				if (a[this.sortedBy] > b[this.sortedBy]) return this.sortOrder === 'asc' ? 1 : -1
				return 0
			})
		},


	}, beforeDestroy() {
		this.$root.$off('close-all-dropdowns', this.closeDropdown)
	},
	methods: {
		toggleMenu() {
			console.log("click");
			this.openedMenu = !this.openedMenu
		},
		hideMenu() {
			this.openedMenu = false
		},
		sortTable(column) {
			if (this.sortedBy === column) {
				this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
			} else {
				this.sortedBy = column
				this.sortOrder = 'asc'
			}
		},
		toggleDropdown() {
			console.log("click");
			this.dropdownOpen = !this.dropdownOpen
			if (this.dropdownOpen) {
				this.$root.$emit('close-all-dropdowns')
				this.$root.$on('close-all-dropdowns', this.closeDropdown)
			} else {
				this.$root.$off('close-all-dropdowns', this.closeDropdown)
			}
		}, closeDropdown() {
			this.dropdownOpen = false
			this.$root.$off('close-all-dropdowns', this.closeDropdown)
		},
		formatTimestamp,
	},

}
</script>

<style scoped>
.container {
	width: 100%;
	height: 100%;
}

.header-flex {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	background: white;
	z-index: 1000;
	margin-left: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	margin-top: 4px;
}

.row-action {
	display: flex;
	align-items: center;
	position: relative;
}

.table {
	padding: 3px;
}

.table-body {
	margin-top: 10px
}

.table-body tr td span {
	max-width: 200px;
	word-wrap: break-word;
	word-break: break-all;
	white-space: normal;
}

.table-header {
	position: -webkit-sticky;
	position: sticky;
	top: 5px;
	z-index: 10;
	background-color: #fff;
}

.table-header:hover {
	cursor: pointer
}

.table-header tr th {
	border-bottom: 1px solid #EDEDED;
	padding-bottom: 5px;
	margin-bottom: 5px;
	color: #767676;
}

.table-header__row {
	padding: 4px;
	border-bottom: 1px solid #EDEDED;
}

.table-body tr td {
	padding: 5px;
	border-top: 1px solid #EDEDED;
}

.table-container {
	position: relative;
	padding-bottom: 50px;
	overflow: auto;
	margin-left: 30px;
}

.loading-spinner {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	font-size: 24px;
	font-weight: bold;
}



.table-navigation {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background: white;
	align-items: center;
}

.action-dropdown {
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	background: white;
	border: 1px solid #ccc;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 10px;
	z-index: 10;
}

.triangle {
	position: absolute;
	top: -10px;
	left: 50%;
	transform: translateX(-50%);
	width: 0;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 10px solid white;
}



@media (max-width: 600px) {
	.action-column {
		width: auto;
		flex-direction: column;
	}

	.column-hide {
		display: none;
	}

}
</style>
