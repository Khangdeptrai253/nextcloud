<template lang="">
	<div>
		<NcButton type="tertiary-no-background" @click="showModal">
			<template #icon>
				<Pencil :size="20" />
			</template>
{{t('files','Edit')}}
</NcButton>
<portal to="destination">
	<div v-if="show" class="modal-container">
		<div class="modal-content">
			<div class="modal-header">
				<p>{{ t('files', 'Edit') }}</p>
				<div class="close-button">
					<NcButton type="tertiary-no-background" @click="hide">
						<template #icon>
                  <Close :size="20" />
                </template>
					</NcButton>
				</div>
			</div>

			<form @submit.prevent="submitForm">
				<div class="form-group">
					<label for="name">{{ t('files', 'Name') }}:</label>
					<input id="name" v-model="editedItem.nameProp" type="text">
				</div>
				<div class="form-group">
					<label for="owner">{{ t('files', 'Author') }}:</label>
					<input id="owner" v-model="editedItem.copyright" type="text">
				</div>
				<div class="form-group">
					<label for="id">{{ t('files', 'Owner') }}:</label>
					<input id="id" v-model="editedItem.owner" type="text">
				</div>
				<div class="form-group">
					<label for="name">{{ t('files', 'Status') }}:</label>
					<input id="name" v-model="editedItem.status" type="text">
				</div>
				<div class="form-group">
					<label for="owner">{{ t('files', 'Version') }}:</label>
					<input id="owner" v-model="editedItem.version" type="text">
				</div>
				<!-- Add input fields for other properties as needed -->
				<div class="modal-footer">
					<NcButton class="submit-button" aria-label="close-button" @click="hide">
						{{ t('files', 'Cancel') }}
					</NcButton>
					<NcButton class="submit-button" type="primary" aria-label="submit" @click="submitForm">
						{{ t('files', 'Accept') }}
					</NcButton>
				</div>
			</form>
		</div>
	</div>
</portal>
</div>
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import Pencil from 'vue-material-design-icons/Pencil.vue'
import Close from 'vue-material-design-icons/Close.vue'
import { mapActions } from 'vuex'
import { showError } from '../../helper/errors.js'

export default {
	name: 'EditModal',
	components: {
		NcButton, Pencil, Close,
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
			editedItem: { ...this.item },
		}
	},
	methods: {
		...mapActions(['editItem']),
		showModal() {
			this.show = true
		},
		hide() {
			this.show = false
		},
		async submitForm() {
			try {
				await this.editItem(this.editedItem)
				this.hide()
			} catch (error) {
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
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100000000;
}

.modal-content {
	position: relative;
	background-color: white;
	padding: 20px;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	width: 600px !important;
	height: auto;
}

.modal-footer {
	display: flex;
	justify-content: end;
	gap: 10px
}

.close-button {
	position: absolute;
	top: 0;
	right: 0;
}

.modal-header p {
	font-weight: bolder;
	font-size: 18px;
}

.form-group {
	margin-bottom: 15px;
}

label {
	display: block;
	font-weight: bold;
}

input[type="text"] {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

.submit-button {
	margin-top: 15px;
}

@media (max-width: 600px) {
	.modal-content {
		width: 350px !important;
	}

	.modal-footer {
		justify-content: center;
	}

}
</style>
