import $ from 'jquery';

let scrollButton = $('.scroll-anchor');

const willScroll = (evt) => {
	let scrollTop = $(evt.target).parent().offset().top;
	let headerHeight = $('.site-header').innerHeight();
	let scrollTo = scrollTop - headerHeight;
	$('html, body').animate({scrollTop: scrollTo}, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  scrollButton.on('click', (evt) => {
		willScroll(evt);
	})
});