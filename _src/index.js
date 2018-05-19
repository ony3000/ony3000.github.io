import _ from 'lodash';
import './style.scss';
import Profile from './profile.png';
import Data from './data.xml';

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

	console.log(Data);

	return element;
}

document.body.appendChild(component());
