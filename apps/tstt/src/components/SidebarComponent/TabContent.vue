<template>
	<div>
		<h2>Hie</h2>
		<div>{{ fileInfo_ }}</div>
	</div>
</template>

<script>
export default {
	name: 'TabContent',
	props: {
	  fileInfo: {
			type: Object,
			default: () => ({}),
	  },
	},
	data() {
	  return {
			loading: true,
			fileInfo_: this.fileInfo,
	  }
	},
	methods: {
		async updateFileInfo(fileInfo) {
			this.fileInfo_ = fileInfo
		},
		setIsActive(isActive) {
		},
	},
}
</script>
