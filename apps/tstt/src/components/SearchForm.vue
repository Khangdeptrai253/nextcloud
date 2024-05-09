<template lang="">
	<div>
		<NcButton class="reposive-button"
			type="secondary"
			aria-label="Search"
			@click="showModal">
			<template #icon>
				<Magnify :size="20" />
			</template>
		</NcButton>
		<div class="search-form">
			<input v-model="searchQuery" @keypress.enter="submitSearch">
			<NcButton v-if="searchQuery || selectedOwnerFilters.length || selectedAuthorFilters.length || selectedStatusFilters.length"
				type="secondary"
				aria-label="Clear Search"
				@click="clearSearchAndFilter">
				<template #icon>
					<Close :size="20" />
				</template>
			</NcButton>
			<NcButton type="secondary" aria-label="Search" @click="submitSearch">
				<template #icon>
					<Magnify :size="20" />
				</template>
			</NcButton>
		</div>
		<div v-if="show" class="modal-container">
			<div class="modal-content">
				<div class="modal-header">
					<p style="font-weight: 800;">
						{{ t('files', 'Search') }}
					</p>
					<NcButton type="tertiary-no-background" @click="hide">
						<template #icon>
							<Close :size="20" />
						</template>
					</NcButton>
				</div>
				<template>
					<div class="modal-body">
						<div class="form-group">
							<label for="nameProp">{{ t('files', 'Name') }}</label>
							<input v-model="searchQuery" type="search" @keypress.enter="submitSearch">
						</div>
					</div>
					<div class="modal-footer">
						<NcButton type="secondary" @click="hide">
							{{ t('files', 'Cancel') }}
						</NcButton>
						<NcButton type="primary" @click="submitSearch">
							{{ t('files', 'Search') }}
						</NcButton>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Close from 'vue-material-design-icons/Close.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import { showError } from '../helper/errors.js'

export default {
	name: 'SearchForm',
	components: {
		NcButton, Magnify, Close,
	},
	data() {
		return {
			searchQuery: '',
			show: false,
		}
	},
	computed: {
		...mapState(['selectedOwnerFilters', 'selectedStatusFilters', 'selectedAuthorFilters']),
	},
	methods: {
		...mapMutations(['setSearchQuery', 'clearSearchQuery']),
		...mapActions(['fetchAssetData', 'clearAll']),
		async submitSearch() {
			this.setSearchQuery(this.searchQuery)
			await this.fetchAssetData()
		},
		async clearSearchAndFilter() {
			try {
				this.searchQuery = null
				await this.clearAll()
			} catch (error) {
				this.error = 'Error searching data'
				showError(this.error)
			}
		},
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
.search-form {
	margin-left: 10px;
	display: flex;
	align-items: center;
	gap: 10px;
}

.search-form input {
	padding: 3px;
	width: 500px;
	margin-right: 5px;
}

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
	z-index: 100000000000000000000;
}

.modal-content {
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 600px;
}

.modal-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.form-group input {
	width: 100%;
}

.modal-footer {
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
	gap: 10px;
}

.reposive-button {
	display: none !important
}

@media (max-width: 600px) {
	.reposive-button {
		display: block !important;
	}

	.modal-content {
		width: max-content;
	}

	.search-form {
		display: none;
	}

	.modal-footer {
		justify-content: center;
	}

}
</style>
