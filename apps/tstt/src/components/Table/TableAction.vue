<template #icon>
	<component :is="modalComponent" v-if="modalComponent" :item="item">
		<template #default />
	</component>
</template>

<script>
export default {
	name: 'TableAction',
	props: {
		modalComponent: {
			type: Object,
			required: false,
		},
		item: Object,
	},

}
</script>
