jQuery(document).ready(function($) {


	// CREATE popup
	$('.create-post').click(function(){
		// Show
		$('.popup-create').toggleClass('is-visible popup-create');

		// Hide
		$('.close-create-post').click(function(event) {
			$('.popup-create').toggleClass('popup-create is-visible');
		});
	});

	// VIEW popup
	$('.view-post').click(function(){
		// Іnsert post from index page to view-popup
		$('.popup-view-container .loaded').load("index.html .first-article");

		// Show
		$('.popup-view').toggleClass('is-visible popup-view');
	
		
	});
	// Hide view
	$('.close-view-post').click(function(event) {
		$('.view').toggleClass('popup-view is-visible');
	});

	// EDIT popup
	$('.edit-post').click(function(){
		// Show
		$('.popup-edit').toggleClass('is-visible popup-edit');
		
		// Hide
		$('.close-edit-post').click(function(event) {
			$('.popup-edit').toggleClass('popup-edit is-visible');
		});
	});

	// LOGIN popup
	$('.login').click(function(){
		// Show
		$('.login-window').toggleClass('is-visible popup-login');
	});
	// Hide
	$('.close-login').click(function(event) {
		$('.login-window').toggleClass('popup-login is-visible');
	});

	// SUBSCRIBE popup
	$('.subscribe').click(function(){
		// Show
		$('.subscribe-window').toggleClass('is-visible popup-subscribe');
	});
	// Hide
	$('.close-subscribe').click(function(event) {
		$('.subscribe-window').toggleClass('popup-subscribe is-visible');
	});
	
	// Show password
	$('.showpasscheckbox').change(function(event) {
		if($(".showpasscheckbox").is(':checked')) {
			$('.password').showPassword();
		} else {
			$('.password').hidePassword();
		}

	});

	// Responsive navigation
	$('.hamburger').click(function(event) {
		// Open menu
		$('nav').toggleClass('nav-menu-open');

		// Toggle icon (Open - close)
		$('.hamburger').toggleClass('fa-times fa-bars');

		// Close menu if we click on menu child element
		$('.menu ul li a').click(function(event) {
			$('nav').removeClass('nav-menu-open');
			$('.hamburger').removeClass('fa-times');
			$('.hamburger').addClass('fa-bars');
		});
	});

});

