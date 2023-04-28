const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
const mode = () => document.body.classList.toggle("dark");

allEventListners();

function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

//GRID PROJETS
window.addEventListener('load', function() {
	
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');

	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		content_image.src = image_url;

		content_image.addEventListener('load', function() {

			card_image.style.backgroundImage = 'url(' + image_url + ')';

			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}