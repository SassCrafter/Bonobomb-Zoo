import { toggleClasses } from './utils';

export default class {
	constructor() {
		this.toggleClass = 'open';
		this.init();
	}


	clickHandler() {
		const openIcon = this.toggler.querySelector('.open');
		const closeIcon = this.toggler.querySelector('.close');
		toggleClasses([this.navigation, this.toggler], this.toggleClass);
		toggleClasses([openIcon, closeIcon], 'hidden');
	}


	init() {
		this.navigation = document.querySelector('.navigation');
		this.toggler = document.querySelector('.navigation-toggler');
		this.toggler.addEventListener('click', this.clickHandler.bind(this));
	}
}