import $ from 'jquery';
import axios from 'axios';
import * as sections from '@shopify/theme-sections';

let hourFinished = false;
let minuteFinished = false;

const shift = () => {
	let image = $('.hero__image');
	let toggle = $('.hero__shift-container');
	if(hourFinished && minuteFinished) {
		image.addClass('animated');
		toggle.addClass('animated');
	}
}

const check = () => {
	let hour = $('.hero__shift-hour');
	let minute = $('.hero__shift-minute');
	hour.on('transitionend', (evt) => {
		hourFinished = true;
		shift();
	});
	minute.on('transitionend', (evt) => {
		minuteFinished = true;
		shift();
	});
}

const toggle = () => {
	$('.hero__shift-day').on('click', () => {
		$('body').removeClass('time__night');
		$('body').addClass('time__day');
	});
	$('.hero__shift-night').on('click', () => {
		$('body').removeClass('time__day');
		$('body').addClass('time__night');
	});
}

sections.register('hero', {
  onLoad: () => {
  	check();
  	toggle();
  }
});