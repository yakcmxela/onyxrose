import $ from 'jquery';
import _ from 'lodash';
import * as sections from '@shopify/theme-sections';

const tabHeader = $('.rewards-tabs__header h2');
const tabSection = $('.rewards-tabs__grid');
const container = $('.rewards-tabs__grid-container');
let containerHeight;

const getSize = () => {
	$.each(tabSection, (key, val) => {
		if($(val).hasClass('active')) {
			containerHeight = $(val).innerHeight();
		}
	});
	return containerHeight;
}

const setSize = (containerHeight) => {
	container.css('min-height', containerHeight + 'px');
}

const switchTabs = (evt) => {
	let tabToActivate = $(evt.currentTarget).attr('data-tab');
	$.each(tabHeader, (key, val) => {
		if($(val).attr('data-tab') == tabToActivate) {
			$(val).addClass('active');
		} else {
			$(val).removeClass('active');
		}
	});
	$.each(tabSection, (key, val) => {
		if($(val).attr('data-tab') == tabToActivate) {
			$(val).addClass('active');
		} else {
			$(val).removeClass('active');
		}
	});
}

sections.register('rewards-tabs', {
  onLoad: () => {
  	$(window).on('load', () => { 
  		getSize();
  		setSize(containerHeight);
  	});
  	$(window).on('resize', _.debounce(() => {
  		getSize();
  		setSize(containerHeight);
  	}, 250));
  	tabHeader.on('click', (evt) => {
  		switchTabs(evt);
  		getSize();
  		setSize(containerHeight);
  	});
  }
});