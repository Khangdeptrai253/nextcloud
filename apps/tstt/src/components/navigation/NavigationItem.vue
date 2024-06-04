<template>
	<li class="navigation-item">
		<a :href="link">
			<i class="navigation-item__icon" :class="icon" />
			<span class="navigation-item__label">{{ label }}</span>
		</a>
	</li>
</template>

<script>
export default {
	name: 'NavigationItem',
	props: {
		label: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			default: '',
		},
	},
}
</script>

<style scoped>
.navigation-item {
	display: flex;
	align-items: center;
	padding: 10px 15px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.navigation-item:hover {
	background-color: #f5f5f5;
}

.navigation-item__icon {
	margin-right: 10px;
	font-size: 18px;
}

.navigation-item__label {
	font-size: 16px;
}
</style>
