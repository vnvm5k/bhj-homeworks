const menuItemLink = Array.from(document.querySelectorAll("ul.menu.menu_main > li > a"));
menuItemLink.forEach(function(element) {
	if(element.nextElementSibling) {
		if(element.nextElementSibling.classList.contains('menu_sub')) {
			element.onclick = function() {
				element.nextElementSibling.classList.toggle('menu_active');
				return false; 
			}
		}
	}
}) 