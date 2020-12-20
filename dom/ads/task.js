let rotators = Array.from(document.querySelectorAll('.rotator__case'));
setInterval(function() {
	let active = rotators.findIndex(element => element.classList.contains('rotator__case_active'));
	if(active + 1 == rotators.length) {
		rotators[active].classList.toggle('rotator__case_active');
		rotators[0].classList.toggle('rotator__case_active');
	} else {
		rotators[active].classList.toggle('rotator__case_active');
		rotators[active + 1].classList.toggle('rotator__case_active');
	}

},1000);