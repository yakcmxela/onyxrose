import $ from 'jquery';
import * as sections from '@shopify/theme-sections';
import slick from 'slick-carousel';

sections.register('featured-product-slider', {
  onLoad: () => {
  	 $('.featured-product-slider__slider').slick({
  	 	nextArrow: '<a class="arrow next fa fa-angle-right fa-2x"></a>',
			prevArrow: '<a class="arrow prev fa fa-angle-left fa-2x"></a>',
			dots: true,
  	 });
  }
});