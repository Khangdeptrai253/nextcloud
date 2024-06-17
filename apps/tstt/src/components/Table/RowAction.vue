<template lang="">
	<div v-click-outside="hideMenu" class="userPopoverMenuWrapper" style="position:relative ">
		<NcButton type="tertiary-no-background"
			class="icon-more"
			:aria-expanded="openedMenu"
			:aria-label="t('settings', 'Toggle user actions menu')"
			@click.prevent="toggleMenu" />
		<div :class="{ 'open': openedMenu }" class="popovermenu">
			<TableAction v-for="(action, index) in actions"
				:key="index"
				:modal-component="action.modalComponent"
				:item="item" />
		</div>
	</div>
</template>

<script>
import TableAction from './TableAction.vue'
import ClickOutside from 'vue-click-outside'
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'

export default {
	name: 'RowAction',
	components: {
		TableAction,
		NcButton,
	},
	directives: {
		ClickOutside,
	},
	props: {
		actions: {
			type: Array,
			required: false,
			default: () => [],
		},
		item: {
			type: Object,
			required: false,
		},
	},
	data() {
		return {
			openedMenu: false,
		}
	},
	methods: {
		toggleMenu() {
			this.openedMenu = !this.openedMenu
		},
		hideMenu() {
			this.openedMenu = false
		},
	},

}
</script>
