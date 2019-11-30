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
