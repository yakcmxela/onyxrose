import $ from 'jquery';
import * as sections from '@shopify/theme-sections';
import { ajaxAtc, updateSelectVariant } from '../utilities/ajax-atc';

sections.register('featured-collection', {
  onLoad: () => {
  }
});