import _ from 'lodash';

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

	return element;
}

document.body.appendChild(component());
