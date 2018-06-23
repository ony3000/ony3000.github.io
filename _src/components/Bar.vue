<template>
	<div>
		<div>Hello Bar</div>
		<router-link to="/bar/about" class="button">What is the bar?</router-link>
		<router-link to="/bar/contact" class="button">Contact us</router-link>
		<router-link to="/bar/somewhere" class="button is-warning">This link does not have any associated pages.</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Bar',
	data() {
		return {};
	},
	methods: {},
};
</script>
