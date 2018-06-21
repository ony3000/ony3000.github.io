export default function printMe() {
	return import(/* webpackChunkName: "moment" */ 'moment').then(module => {
		const moment = module.default;

		console.log(moment().format('MMMM Do YYYY, h:mm:ss a [GMT]Z'));
	}).catch(error => 'An error occurred while loading the component');
}
