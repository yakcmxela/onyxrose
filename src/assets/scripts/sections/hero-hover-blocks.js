import $ from 'jquery';
import * as sections from '@shopify/theme-sections';

const blocks = $('.hero-blocks__block');
let areStacked = false;

const onCenter = (blocks) => {
	$(window).on('scroll', () => {
		$.each(blocks, (key, block) => {
			let windowCenter = ($(window).innerHeight() / 2) + $(window).scrollTop();
			let topThresh = $(block).offset().top;
			let bottomThres = $(block).offset().top + $(block).innerHeight();
			if(windowCenter > topThresh && windowCenter < bottomThres) {
				$(block).addClass('active');
			} else {
				$(block).removeClass('active');
			}
		})
	})
}

const onClick = (blocks) => {
	blocks.on('click', (evt) => {
		$(evt.currentTarget).toggleClass('active');
	})
}

const getTrigger = (blocks) => {
	blocks.removeClass('active');
	if( blocks.parent().css('display') == 'block' ) {
		areStacked = true;
	} else {
		areStacked = false;
	}
	return areStacked;
}


sections.register('hero-hover-blocks', {
  onLoad: () => {
  	// $(window).on('load resize', () => { 
  	// 	getTrigger(blocks);
  	// 	if(areStacked) {
  	// 		onCenter(blocks);
  	// 	} else {
  	// 		onClick(blocks);
  	// 	}
  	// });
  	onClick(blocks);
  }
});