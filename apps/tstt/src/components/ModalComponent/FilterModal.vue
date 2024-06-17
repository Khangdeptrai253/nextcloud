<template>
	<div>
		<NcButton type="secondary" @click="showModal">
			<template #icon>
				<FilterOutline :size="20" />
			</template>
		</NcButton>
		<div v-if="show" class="modal-container" @click="handleOutsideClick">
			<div class="modal-content">
				<div class="modal-header">
					<p style="font-weight: 800;">
						{{ t('files', 'Filter') }}
					</p>
					<NcButton type="tertiary-no-background" @click="hide">
						<template #icon>
							<Close :size="20" />
						</template>
					</NcButton>
				</div>
				<template>
					<div class="form-select">
						<div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
							<div>
								<label>{{ t('files', 'Author') }}</label>
								<Multiselect v-model="selectedAuthors"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="authorDataCompute"
									:multiple="true"
									label="displayName"
									track-by="id" />
							</div>
							<div>
								<label>{{ t('files', 'Owner') }}</label>
								<Multiselect v-model="selectedOwners"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="ownerDataCompute"
									:multiple="true"
									label="displayName"
									track-by="id" />
							</div>
							<div>
								<label>{{ t('files', 'Status') }}</label>
								<Multiselect v-model="selectedStatus"
									:selected-label="t('files', 'Selected')"
									:select-label="t('files', 'Press enter to select')"
									:close-on-select="false"
									:searchable="true"
									:placeholder="t('files', 'Select option')"
									:options="statusData"
									:multiple="true"
									label="status"
									track-by="id" />
							</div>
							<div style="display: flex; justify-content: end">
								<NcButton type="primary" @click="applyFilter">
									<template #icon>
										<FilterOutline :size="20" />
									</template>
									{{ t('files', 'Apply filter') }}
								</NcButton>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import FilterOutline from 'vue-material-design-icons/FilterOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import Multiselect from 'vue-multiselect'
import { mapMutations, mapState } from 'vuex'

export default {
	name: 'FilterModal',
	components: {
		NcButton,
		FilterOutline,
		Multiselect,
		Close,
	},
	data() {
		return {
			show: false,
		}
	},
	computed: {
		...mapState(['selectedOwnerFilters', 'selectedStatusFilters', 'selectedAuthorFilters', 'authorData', 'ownerData', 'statusData']),
		authorDataCompute() {
			return Object.keys(this.authorData).map(key => {
				return {
					id: this.authorData[key].uid,
					displayName: this.authorData[key].displayname,
				}
			})
		},
		ownerDataCompute() {
			return Object.keys(this.ownerData).map(key => {
				return {
					id: this.ownerData[key].uid,
					displayName: this.ownerData[key].displayname,
				}
			})
		},
		selectedOwners: {
			get() {
				return this.selectedOwnerFilters
			},
			set(value) {
				this.setSelectedOwnerFilters(value)
			},
		},
		selectedStatus: {
			get() {
				return this.selectedStatusFilters
			},
			set(value) {
				this.setSelectedStatusFilters(value)
			},
		},
		selectedAuthors: {
			get() {
				return this.selectedAuthorFilters
			},
			set(value) {
				this.setSelectedAuthorFilters(value)
			},
		},
	},
	methods: {
		...mapMutations(['setSelectedOwnerFilters', 'setSelectedAuthorFilters', 'setSelectedStatusFilters', 'clearFilters']),
		showModal() {
			this.show = true
		},
		hide() {
			this.show = false
		},
		handleOutsideClick(event) {
			if (event.target.classList.contains('modal-container')) {
				this.hide()
			}
		},
		applyFilter() {
			this.hide()
		},
		clearFilter() {
			this.clearFilters()
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
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100000000000000000000;
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
	background-color: white;
	padding: 50px 100px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 800px;
}

.multiple-select-container {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form-select {
	display: flex;
	gap: 10px;
	align-items: center;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

@media (max-width: 600px) {
	.modal-content {
		width: max-content;
	}

	.modal-footer {
		justify-content: center;
	}

}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
