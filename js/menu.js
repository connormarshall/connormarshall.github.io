//drawer
function moveDrawer(el) {
	var drawer = document.getElementById("drawer");
	var icon = el.childNodes[1];
	if(drawer.style.right == '0%') {
			drawer.style.right = '-100%';
			toggleBetweenClasses(icon, 'fa-arrow-right', 'fa-bars');

	} else {
			drawer.style.right = '0%';
			toggleBetweenClasses(icon, 'fa-arrow-right', 'fa-bars');

	}

}

function toggleBetweenClasses(el, c1, c2) {
  el.classList.toggle(c1);
  el.classList.toggle(c2);

}

//Hiding nav on scroll
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

	var navBar = document.querySelector('#navbar');
	var upTo = document.querySelector('#upto');
	var contacts = document.querySelector('#contacts');

	if(currentScrollPos >= upTo.offsetTop - 50)
		navBar.classList.add('pastbanner');
	else
		navbar.classList.remove('pastbanner');

	if(currentScrollPos >= contacts.offsetTop - 50)
		navBar.classList.add('pastcontacts');
	else
		navBar.classList.remove('pastcontacts');

  prevScrollpos = currentScrollPos;

}
