import $ from 'jquery';
import { addItemFromForm } from '@shopify/theme-cart';

export function updateSelectVariant(evt) {
	let variantTitleSelected = $(evt.currentTarget).find('.product__variant-title').html();
	let variantPriceSelected = $(evt.currentTarget).find('.product__variant-price').html();
	let variantId = $(evt.currentTarget).attr('value');
	$(evt.currentTarget).siblings('.product__variants-selected').find('.product__variant-title').html(variantTitleSelected);
	$(evt.currentTarget).siblings('.product__variants-selected').find('.product__variant-price').html(variantPriceSelected);
	$(evt.currentTarget).siblings('.product__variants-selected').attr('value', variantId);
}

export function ajaxAtc(evt) {
	evt.preventDefault();
	let id = $(evt.currentTarget).attr('data-variant-id');
	let quantity = $(evt.currentTarget).attr('data-quantity');
	let data = {
		id: id,
		quantity: quantity
	}
	addItemFromForm(data);
}