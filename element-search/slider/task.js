let slides = document.querySelectorAll('.slider__item');
let arrows =  document.querySelectorAll('.slider__arrow');

arrows.forEach(function(element) {
	element.onclick = function() {
		let slide = Array.from(slides); 
		for(let i = 0; i < slide.length; i++) {
			if(slide[i].classList.contains('slider__item_active')) {
				slide[i].classList.remove('slider__item_active');
			}
			slide[i+1].classList.add('slider__item_active');
		}
	}
});