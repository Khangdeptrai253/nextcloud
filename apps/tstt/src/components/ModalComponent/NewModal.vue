<template>
<<<<<<< HEAD
	<div>
		<NcButton type="primary" @click="showModal">
			<template #icon>
				<Plus :size="20" />
			</template>
			{{ t('files', 'New') }}
		</NcButton>
		<div v-if="show" class="modal-container" @click="handleOutsideClick">
			<div class="modal-content">
				<div class="modal-header">
					<p style="font-weight: 800;">
						{{ t('files', 'New') }}
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
							<input id="nameProp" v-model="newAsset.nameProp" type="text">
						</div>
						<div class="form-group">
							<label for="copyrightId">{{ t('files', 'Author') }}</label>
							<select v-model="newAsset.copyrightId" class="createProp" required>
								<option v-for="option in authorData" :key="option.id" :value="option.id">
									{{ option.displayName }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="ownerId">{{ t('files', 'Owner') }}</label>
							<select v-model="newAsset.ownerId" class="createProp" required>
								<option v-for="option in ownerData" :key="option.id" :value="option.id">
									{{ option.displayName }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="status">{{ t('files', 'Status') }}</label>
							<select v-model="newAsset.status" class="createProp" required>
								<option v-for="option in statusData" :key="option.id" :value="option.id">
									{{ option.status }}
								</option>
							</select>
						</div>
						<div class="form-group">
							<label for="version">{{ t('files', 'Version') }}</label>
							<input id="version" v-model="newAsset.version" type="text">
						</div>
					</div>
					<div class="modal-footer">
						<NcButton type="secondary" @click="hide">
							{{ t('files', 'Cancel') }}
						</NcButton>
						<NcButton type="primary" @click="handleSubmit">
							{{ t('files', 'New') }}
						</NcButton>
					</div>
				</template>
			</div>
		</div>
	</div>
=======
    <div>
        <NcButton type="primary" @click="showModal">
            <template #icon>
                <Plus :size="20" />
            </template>
            {{ t('files', 'New') }}
        </NcButton>

        <div v-if="show" class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <p style="font-weight: 800;">
                        {{ t('files', 'New') }}
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
                            <input type="text" id="nameProp" v-model="newAsset.nameProp" />
                        </div>
                        <div class="form-group">
                            <label for="version">{{ t('files', 'Version') }}</label>
                            <input type="text" id="version" v-model="newAsset.version" />
                        </div>
                        <div class="form-group">
                            <label for="status">{{ t('files', 'Status') }}</label>
                            <Multiselect :selected-label="t('files', 'Selected')" label="name" track-by="name"
                                :select-label="t('files', 'Press enter to select')" :searchable="true"
                                :placeholder="t('files', 'Select option')" v-model="newAsset.status"
                                :options="statusOptions" />
                        </div>
                        <div class="form-group">
                            <label for="owner">{{ t('files', 'Owner') }}</label>
                            <Multiselect :selected-label="t('files', 'Selected')" label="name" track-by="name"
                                :select-label="t('files', 'Press enter to select')" :searchable="true"
                                :placeholder="t('files', 'Select option')" v-model="newAsset.owner"
                                :options="ownerOptions" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <NcButton type="secondary" @click="hide">{{ t('files', 'Cancel') }}</NcButton>
                        <NcButton type="primary" @click="handleSubmit">{{ t('files', 'New') }}</NcButton>
                    </div>
                </template>
            </div>
        </div>
    </div>
>>>>>>> 754af851 ([1] Asset Management)
</template>

<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import Plus from 'vue-material-design-icons/Plus.vue'
import Close from 'vue-material-design-icons/Close.vue'
<<<<<<< HEAD
// import { AssetApi } from '../../services/assetAPI.js'
import { mapActions, mapState } from 'vuex'
import { showError } from '@nextcloud/dialogs'
import { getCurrentUser } from '@nextcloud/auth'

export default {
	name: 'NewModal',
	components: {
		NcButton,
		Plus,
		Close,
	},
	data() {
		return {
			show: false,
			newAsset: {
				nameProp: null,
				ownerId: null,
				copyrightId: null,
				status: null,
				version: null,
				createdAt: null,
				createdBy: null,
				updatedAt: null,
				deletedAt: null,
				deletedBy: null,
				updatedBy: null,
			},
		}
	},
	computed: {
		...mapState([
			'authorData',
			'ownerData',
			'statusData',
		]),
	},
	async mounted() {
		await this.getAuthorData()
		await this.getOwnerData()
		await this.getStatusData()
	},
	methods: {
		...mapActions(['addItem', 'getAuthorData', 'getOwnerData', 'getStatusData']),
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
		async handleSubmit() {
			this.newAsset.createdAt = Date.now()
			this.newAsset.createdBy = getCurrentUser().uid
			try {
				const property = {
					...this.newAsset,
					ownerId: this.newAsset.ownerId,
					copyrightId: this.newAsset.copyrightId,
					status: this.newAsset.status,
					createdAt: this.newAsset.createdAt = Date.now(),
					createdBy: this.newAsset.createdBy = getCurrentUser().uid,
				}

				await this.addItem(property)
				this.hide()
				this.newAsset = {
					nameProp: null,
					ownerId: null,
					copyrightId: null,
					status: null,
					version: null,
					createdAt: null,
					createdBy: null,
					updatedAt: null,
					deletedAt: null,
					deletedBy: null,
					updatedBy: null,
				}
			} catch (error) {
				console.error(error)
				showError(error)
			}
		},
	},
=======
import Multiselect from 'vue-multiselect'
import { AssetApi } from '../../services/assetAPI.js'
import { mapActions, mapState } from 'vuex'

const apiClient = new AssetApi()
export default {
    name: 'NewModal',
    components: {
        NcButton,
        Plus,
        Multiselect,
        Close,
    },
    data() {
        return {
            show: false,
            ownerOptions: [{ name: 'Owner 1', id: 1 },
            { name: 'Owner 2', id: 2 },
            { name: 'Owner 3', id: 3 },
            { name: 'Owner 4', id: 4 },
            { name: 'Owner 5', id: 5 },
            { name: 'Owner 6', id: 6 }],

            statusOptions: [{ name: 'InActive', id: 1 },
            { name: 'Active', id: 2 },
            { name: 'Block', id: 3 },],
            newAsset: {
                nameProp: '',
                status: 'active',
                version: '',
                owner: null,
            },
        }
    },

    // async mounted() {
    // 	await this.loadOptionsFromApi()
    // },

    methods: {
        ...mapActions(['addItem']),
        showModal() {
            this.show = true
        },
        hide() {
            this.show = false
        },
        async handleSubmit() {
            try {
                const data = {
                    nameProp: this.newAsset.nameProp,
                    status: this.newAsset.status.id,
                    owner: this.newAsset.owner.id,
                    version: this.newAsset.version,
                }

                await this.addItem(data)
                this.hide()
                this.newAsset = {
                    nameProp: '',
                    status: null,
                    version: '',
                    copyright: null,
                    owner: null,
                }
            } catch (error) {
                console.error(error)
                showError(error)
            }
        },
    }
>>>>>>> 754af851 ([1] Asset Management)
}
</script>

<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
<<<<<<< HEAD
=======
    background-color: transparent;
>>>>>>> 754af851 ([1] Asset Management)
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100000000000000000000;
<<<<<<< HEAD
	background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
=======
>>>>>>> 754af851 ([1] Asset Management)
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 600px;
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

<<<<<<< HEAD
=======

>>>>>>> 754af851 ([1] Asset Management)
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
