import $ from 'jquery';

const verifyPass = () => {
	$('#register-user').on('click', (evt) => {
		if($('#CreatePassword').val() !== $('#CheckPassword').val()) {
			evt.preventDefault();
			$('.register__password-error').html('<span>Passwords do not match. Please try again</span>');
		}
	})
}

verifyPass();