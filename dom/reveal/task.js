let reveals = Array.from(document.querySelectorAll('.reveal')); 

reveals.forEach(function(element) {
	window.addEventListener("scroll", function() {
		let coords = element.getBoundingClientRect().top;
		let windowHeight = window.innerHeight;

		let topVisible = coords < windowHeight;

		if(topVisible) {
			element.classList.add('reveal_active'); 
		}
	});
});
