import $ from 'jquery';
import slick from 'slick-carousel';
import axios from 'axios';

const scrolled = () => {
	let pos = window.scrollY;
	if(pos > 1) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
}

const openNav = () => {
	$('#nav-toggle').on('click', () => {
		$('body').toggleClass('nav-open');
		$('.site-header__background-image').toggleClass('force-active');
	});
}

const submenus = () => {
	$.each($('.site-header__submenu-container'), (key, val) => {
		$(val).css('height', $(val).innerHeight() + 'px');
	});
	$('.site-header__submenu-container').addClass('hidden');
	$('.shop__icon-plus').addClass('hidden');
	$('.ocn').on( 'click', '.shop__icon-plus', (evt) => {
		$('.site-header__submenu-container').not($(evt.target).siblings('.site-header__submenu-container')).addClass('hidden');
		$('.shop__icon-plus').not($(evt.target)).addClass('hidden');
		let submenu = $(evt.target).siblings('.site-header__submenu-container');
		if(submenu.hasClass('hidden')) {
			submenu.removeClass('hidden');
			$(evt.target).removeClass('hidden');
		} else {
			submenu.addClass('hidden');
			$(evt.target).addClass('hidden');			
		}
	});
};

const cartSlider = () => {
	$('.site-header__cart-items').slick({
	 	nextArrow: '<a class="arrow next fa fa-angle-right fa-2x"></a>',
		prevArrow: '<a class="arrow prev fa fa-angle-left fa-2x"></a>',
		autoplay: false,
	 });
}

const dayAndNight = () => {
	const header = document.getElementById('site-header');
	const user = {
		city: header.getAttribute('data-user-city'),
		state: header.getAttribute('data-user-state'),
		zip: header.getAttribute('data-user-zip'),
		time: header.getAttribute('data-user-time'),
		unix: new Date(header.getAttribute('data-user-date')).getTime() / 1000,
	}
	if(!user.city && !user.time) {
		return;
	}
	const key = '0aa1f3bf92958ba7b5e30f89d279c005';
	let time = user.time.split(':');
	user.time = [time[0], time[1]];
	let degree = 360;
	if(user.time[0] > 6) {
		degree = 0;
	}

	let transformHour = (user.time[0] * 30) + degree;
	let transformMinute = (user.time[1] * 6) + 360;
	$('body').addClass('time__loading');
	$('.hero__shift-hour').css('transform', 'rotate(' + transformHour + 'deg)');
	$('.hero__shift-minute').css('transform', 'rotate(' + transformMinute + 'deg)');

	let sun = {
		rise: [7, 0],
		set: [19, 0],
	}
	
	let day = false;
	let night = false;
	let req = null;

	const bodyClass = (day, night) => {
		if(day) {
			$('body').removeClass('time__loading');
			$('body').removeClass('time__night');
			$('body').addClass('time__day');
		} else {
			$('body').removeClass('time__loading');
			$('body').removeClass('time__day');
			$('body').addClass('time__night');
		}
	}

	if(user.zip) {
		req = `https://api.openweathermap.org/data/2.5/weather?q=${user.zip},us&APPID=${key}`;
	} else if(!user.zip && user.city && user.state) {
		req = `https://api.openweathermap.org/data/2.5/weather?q=${user.city},${user.state}&APPID=${key}`;
	}

	if(req !== null) {
		let res = axios.get(req);
		res.then((data) => {
			let sunrise = data.data.sys.sunrise;
			let sunset = data.data.sys.sunset;
			if(user.unix >= sunrise && user.unix < sunset) {
				day = true;
			} else {
				night = true;
			}
			bodyClass(day, night)
		});
	} else {
		if(user.time[0] > 6 && user.time[0] < 20) {
			day = true;
		} else {
			night = true;
		}
		bodyClass(day, night)
	}
	
}

$(document).ready(() => {
	window.addEventListener('scroll', () => { scrolled() });
	openNav();
	submenus();
	cartSlider();
	dayAndNight();
});