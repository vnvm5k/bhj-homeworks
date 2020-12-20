const btn = document.querySelector('.dropdown');
const listElements = document.querySelectorAll('.dropdown__item');
btn.addEventListener('click', function () {
	btn.lastElementChild.classList.toggle('dropdown__list_active');
});

listElements.forEach(function(element) {
	element.addEventListener('click', function() {
		btn.firstElementChild.textContent = element.firstElementChild.textContent;
		btn.lastElementChild.classList.toggle('dropdown__list_active');
		return false;
	})
})