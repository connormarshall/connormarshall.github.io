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
	var navButton = document.querySelector('#menubutton');

	var navBar = document.querySelector('#navbar');
	var about = document.querySelector('#aboutme');
	var contacts = document.querySelector('#contacts');

	if(window.getComputedStyle(navButton).display === 'none') {
	  if (prevScrollpos > currentScrollPos)
	    navBar.style.top = "0";
		else
	    navBar.style.top = "-60px";

		if(currentScrollPos >= about.offsetTop - 50) {
			navBar.style.color = '#000';
			navBar.style.backgroundColor = '#fff';
			navBar.style.boxShadow = '0 1px #ddd';

		} else {
			navBar.style.color = '#fff';
			navBar.style.backgroundColor = 'transparent';
			navBar.style.boxShadow = 'none';

		}

	} else {
		navBar.style.backgroundColor = 'transparent';
		navBar.style.boxShadow = 'none';

		if(currentScrollPos >= contacts.offsetTop - 50)
			navBar.style.color = '#999';
		else if(currentScrollPos >= about.offsetTop - 50)
			navBar.style.color = '#000';
		else
			navBar.style.color = '#fff';

	}
  prevScrollpos = currentScrollPos;

}
