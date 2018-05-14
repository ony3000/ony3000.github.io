import _ from 'lodash';
import './style.css';

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

	return element;
}

document.body.appendChild(component());
