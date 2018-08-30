//import 'font-awesome/scss/font-awesome.scss';
import './assets/style.scss';
import Profile from './assets/profile.png';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route_rules';
import App from './components/App';

Vue.use(VueRouter);

const router = new VueRouter({
	routes
});

async function getComponent() {
	var element = document.createElement('span');
	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

	element.innerHTML = _.join([
		'this',
		'is',
		'personal',
		'page',
		'to',
		'studying',
		'webpack',
		'4.x',
	], ' ');
	element.classList.add('hello');

	var myProfile = new Image();
	myProfile.src = Profile;

	element.appendChild(myProfile);

	return element;
}

getComponent().then(component => {
	document.body.appendChild(component);
});

function vueContainer() {
	var element = document.createElement('div');

	element.id = 'app';

	return element;
}

document.body.appendChild(vueContainer());

const viewModal = new Vue({
	el: '#app',
	router,
	components: {
		App,
	},
	template: '<App/>',
});
