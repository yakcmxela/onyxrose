import {load} from '@shopify/theme-sections';
import '../sections/hero';
import '../sections/product';
import '../sections/featured-collection';
import '../sections/featured-products';
import '../sections/hero-hover-blocks';
import '../sections/list-dropdowns';
import '../sections/rewards-tabs';

document.addEventListener('DOMContentLoaded', () => {
  load('*');  
});
