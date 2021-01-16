const btn = document.querySelector('.dropdown');
const listElements = document.querySelectorAll('.dropdown__item');
btn.addEventListener('click', function () {
	btn.lastElementChild.classList.toggle('dropdown__list_active');
});

listElements.forEach(function(element) {
	element.addEventListener('click', function(evt) {
		btn.firstElementChild.textContent = element.firstElementChild.textContent;
		btn.lastElementChild.classList.toggle('dropdown__list_active');
		evt.preventDefault();
		return false;
	})
})