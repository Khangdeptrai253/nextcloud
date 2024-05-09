<template lang="">
	<div>
		<NcButton type="tertiary-no-background" @click="showModal">
			<template #icon>
				<TrashCanOutline :size="20" />
			</template>
			{{ t('files','Delete') }}
		</NcButton>
		<portal to="destination">
			<div v-if="show" class="modal-container" @click="handleOutsideClick">
				<div class="modal-content">
					<div class="modal-header">
						<p>
							{{ t('files','Delete') }} <strong>{{ item.nameProp }}</strong>
						</p>
						<NcButton type="tertiary-no-background" @click="hide">
							<template #icon>
								<Close :size="20" />
							</template>
						</NcButton>
					</div>

					<template>
						<p class="heading">
							{{ t('files','Are you sure, this operation cannot be undone') }}
						</p>
					</template>
					<div class="modal-footer">
						<NcButton aria-label="delete" type="error" @click="handleDelete">
							{{ t('files','Delete') }}
						</NcButton>
					</div>
				</div>
			</div>
		</portal>
	</div>
</template>
<script>

import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import Close from 'vue-material-design-icons/Close.vue'
import { mapActions } from 'vuex'
import { showError } from '../../helper/errors.js'

export default {
	name: 'DeleteModal',
	components: {
		NcButton, TrashCanOutline, Close,
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
	methods: {
		...mapActions(['deleteItem']),
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
		async handleDelete() {
			try {
				await this.deleteItem(this.item.id)
				this.hide()
			} catch (error) {
				console.error(error)
				showError(error)
			}
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
	z-index: 100000000;
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
	background-color: white;
	padding: 20px;
	border-radius: 15px;
	right: 600px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 600px;
}

.multiple-select-container {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
	margin-bottom: 20px
}

.modal-footer {
	display: flex;
	justify-content: end;
}

.heading {
	color: black;
	font-weight: 700;
	font-size: 18;
}

@media (max-width: 600px) {
	.modal-content {
		width: 400px;
	}

	.modal-footer {
		justify-content: center;
	}

	.modal-footer button {
		margin-top: 20px;
		display: block;
		width: 100%;
	}

}
</style>
