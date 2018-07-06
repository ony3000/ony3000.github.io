<template>
	<div>
		<div class="greeting">Hello Vue!</div>
		<button @click="printNow">
			<span>Click me and check the console!</span>
			<i class="fa fa-hand-o-up" aria-hidden="true"></i>
		</button>
		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {};
	},
	methods: {
		printNow() {
			console.log(new Date());
		},
	},
};
</script>

<style lang="scss" scoped>
.greeting {
	background-color: gold;
}
</style>
