<template lang="">
	<NcButton type="secondary">
		<template #icon>
			<DownloadCircleOutline :size="20" />
		</template>
	</NcButton>
</template>
<script>
import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import DownloadCircleOutline from 'vue-material-design-icons/DownloadCircleOutline.vue'
export default {
	name: 'DownloadForm',
	components: {
		DownloadCircleOutline, NcButton,
	},
}
</script>
