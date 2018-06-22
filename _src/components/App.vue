<template>
	<div>
		<div class="greeting">Hello Vue!</div>
		<button @click="printNow">
			<span>Click me and check the console!</span>
			<i class="fa fa-hand-o-up" aria-hidden="true"></i>
		</button>
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
			return import(/* webpackChunkName: "moment" */ 'moment').then(module => {
				const moment = module.default;

				console.log(moment().format('MMMM Do YYYY, h:mm:ss a [GMT]Z'));
			}).catch(error => 'An error occurred while loading the component');
		},
	},
};
</script>

<style lang="scss" scoped>
.greeting {
	background-color: gold;
}
</style>
