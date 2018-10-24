import $ from 'jquery';

$('.button__intent').on('click', (evt) => {
	evt.preventDefault();
	SweetTooth.intent('st:points:rewards');
});