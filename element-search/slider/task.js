let slides = Array.from(document.querySelectorAll('.slider__item'));
let arrows = Array.from(document.querySelectorAll('.slider__arrow'));

arrows.forEach(function(element) {
	element.onclick = function() {
		let active = slides.findIndex(item => item.classList.contains('slider__item_active'))
		slides[active].classList.toggle('slider__item_active');
		
		if (element.classList.contains('slider__arrow_prev')) { 
				
				if(active == 0) {
					slides[4].classList.toggle('slider__item_active')
				}
				else {
					slides[active-1].classList.toggle('slider__item_active')
				}
		}

		else if (element.classList.contains('slider__arrow_next')) { 
				
				if(active == 4) {
					slides[0].classList.toggle('slider__item_active')
				}
				else {
					slides[active+1].classList.toggle('slider__item_active')
				}
		}

	}
});

