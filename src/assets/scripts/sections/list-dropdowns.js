import $ from 'jquery';
import * as sections from '@shopify/theme-sections';

let expandTrigger = $('.list-dropdowns__item-heading');

const expandItem = (evt) => {
	$(evt.currentTarget).parent().toggleClass('active');
}

sections.register('list-dropdowns', {
  onLoad: () => {
  	 expandTrigger.on('click', (evt) => { expandItem(evt) });
  }
});