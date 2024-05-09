<template>
	<NcAppNavigation>
		<template #list>
			<NcAppNavigationItem :title="t('files', 'Asset classification')" :exact="true" to="/">
				<template #icon>
					<FolderOutline :size="20" />
				</template>
			</NcAppNavigationItem>
		</template>
	</NcAppNavigation>
</template>

<script>
import NcAppNavigation from '@nextcloud/vue/dist/Components/NcAppNavigation.js'
import NcAppNavigationItem from '@nextcloud/vue/dist/Components/NcAppNavigationItem.js'
import FolderOutline from 'vue-material-design-icons/FolderOutline.vue'

export default {
	name: 'AppNavigation',
	components: {
		FolderOutline,
		NcAppNavigation,
		NcAppNavigationItem,
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
