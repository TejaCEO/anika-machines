$(function() {
	var form = $('#contact-form');
	var formMessages = $('#output-contact');
	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		//console.log(formData);
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			jQuery('.contact-form').html('<h5>Message sent <i class="fa fa-check"></i></h5>'); 
 			jQuery('#output-contact').html('<p>Thanks for contacting us! We will get back to you shortly.</p>');
			$(formMessages).text(response);
			$('#name, #email, #phone, #state, #message').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});