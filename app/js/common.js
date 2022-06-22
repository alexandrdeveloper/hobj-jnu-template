document.addEventListener('DOMContentLoaded', () => {

	

	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.b-navbar').addClass('b-navbar_scrolled');
		}
		else {
			$('.b-navbar').removeClass('b-navbar_scrolled');
		}
	});

	const burger = document.querySelector('.b-burger');
	const menu = document.querySelector('.b-menu');

	function toggleBurger() {
		burger.classList.toggle('b-burger_close');
	}	

	function toggleMenu() {
		menu.classList.toggle('b-menu_visible');
	}

	burger.addEventListener('click', function(e) {
		e.preventDefault();

		toggleBurger();
		toggleMenu();
	}); 

	document.addEventListener('click', function(e) {
		let target = e.target;
		let its_menu = target == menu || menu.contains(target);
		let its_burger = target == burger || burger.contains(target);
		let menu_is_active = menu.classList.contains('b-menu_visible')
		if (!its_menu && !its_burger && menu_is_active) {
			console.log('11');
			toggleMenu();
			toggleBurger();
		}
	});

	const menuItem = document.querySelectorAll('.b-menu__link');
	menuItem.forEach(item => {
		item.addEventListener('click', function() {
			toggleMenu();
			toggleBurger();
			menuItem.forEach(item => {
				item.classList.remove('b-menu__link_active');
			});
			this.classList.add('b-menu__link_active');
		});
	});	

	

	$(".b-menu__link, .b-hero-arrow").mPageScroll2id();

	let sections = $('section, .b-hero'), 
		nav = $('.b-menu'),
		nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
	let cur_pos = $(this).scrollTop();
	
	sections.each(function() {
		let top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
		
		if (cur_pos >= top - 50 && cur_pos <= bottom) {
		nav.find('.b-menu__link').removeClass('b-menu__link_active');
		sections.removeClass('active');
		
		$(this).addClass('active');
		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('b-menu__link_active');
		}
	});
	});

	nav.find('a').on('click', function () {
	var $el = $(this), id = $el.attr('href');
	
	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height,
	}, 500);
	
	return false;
	});

	


});