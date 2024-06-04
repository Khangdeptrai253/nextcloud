<template>
	<NcAppNavigation :class="{ 'icon-loading': loading }">
		<template #list>
			<NcAppNavigationItem :title="t('tstt', 'Asset classification')" :exact="true" to="/">
				<template #icon>
					<FolderOutline :size="20" />
				</template>
			</NcAppNavigationItem>
			<NcAppNavigationItem :title="t('tstt', 'Copyright management')" :exact="true" to="/author">
				<template #icon>
					<ShieldAccountOutline :size="20" />
				</template>
			</NcAppNavigationItem>
			<NcAppNavigationItem :title="t('tstt', 'Owner management')" :exact="true" to="/owner">
				<template #icon>
					<FolderAccountOutline :size="20" />
				</template>
			</NcAppNavigationItem>
		</template>
	</NcAppNavigation>
</template>

<script>
import NcAppNavigation from '@nextcloud/vue/dist/Components/NcAppNavigation.js'
import NcAppNavigationItem from '@nextcloud/vue/dist/Components/NcAppNavigationItem.js'
import FolderOutline from 'vue-material-design-icons/FolderOutline.vue'
import FolderAccountOutline from 'vue-material-design-icons/FolderAccountOutline.vue'
import ShieldAccountOutline from 'vue-material-design-icons/ShieldAccountOutline.vue'

export default {
	name: 'AppNavigation',
	components: {
		FolderOutline,
		FolderAccountOutline,
		ShieldAccountOutline,
		NcAppNavigation,
		NcAppNavigationItem,
	},
	data() {
		return {
			navigationItems: [
				{ label: 'Asset Management', link: '/asset', icon: 'fas fa-file-alt' },
				{ label: 'Author Management', link: '/author', icon: 'fas fa-clock' },
				{ label: 'Owner Management', link: '/owner', icon: 'fas fa-heart' },

			],
		}
	},
}
</script>
<style scoped lang="scss">
#app-settings-content {
	p {
		margin-top: 20px;
		margin-bottom: 20px;
		color: var(--color-text-light);
	}
}
</style>
