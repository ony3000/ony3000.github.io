import _ from 'lodash';
import printMe from './print.js';
import './assets/style.scss';
import Profile from './assets/profile.png';
import Data from './assets/data.xml';

import Vue from 'vue';
import App from './components/App.vue';

function component() {
	var element = document.createElement('span');

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

	var btn = document.createElement('button');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	console.log(Data);

	return element;
}

document.body.appendChild(component());

function vueContainer() {
	var element = document.createElement('div');

	element.id = 'app';

	return element;
}

document.body.appendChild(vueContainer());

const viewModal = new Vue({
	el: '#app',
	components: {
		App,
	},
	template: '<App/>',
});
