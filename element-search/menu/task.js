const menuItem = document.querySelectorAll(".menu__link");
menuItem.forEach(function(element) {
	if(element.closest('.menu').classList.contains('menu_sub')) {
		element.closest('.menu').onclick = function() {
			element.closest('.menu').classList.add('menu_active');
			return false; 
		}
	}
}) 