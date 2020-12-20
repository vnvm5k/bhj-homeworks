let controls = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book');
controls.forEach(function(element) {
	element.addEventListener('click', function () {
		let active = controls.findIndex(el => el.classList.contains('font-size_active'));
		controls[active].classList.toggle('font-size_active');
		element.classList.toggle('font-size_active'); 
		let type = element.getAttribute('data-size'); 
		if (type && type == 'small') {
			book.setAttribute('class', 'book book_fs-small');
		} else if (type && type == 'big') {
			book.setAttribute('class', 'book book_fs-big');
		} else {
			book.setAttribute('class', 'book');
		}
	});
});