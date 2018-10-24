import $ from 'jquery';

var filterDropdown = () => {
	$('.filter-dropdown').on('click', function(e){
		e.stopPropagation();
		$(this).toggleClass('active');
		$('.filter-dropdown').not(this).removeClass('active');
	});

	$(document).on('click.closefilter',':not(.filter-dropdown)', function(){
		$('.filter-dropdown').removeClass('active');
	});

};

export default filterDropdown;