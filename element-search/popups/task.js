const windows = document.querySelectorAll(".modal"); 
const firstWindow = document.getElementsByClassName("modal")[0];
const secondWindow = document.getElementsByClassName("modal")[1];
firstWindow.classList.add('modal_active'); 

let close = document.querySelectorAll(".modal__close"); 
let change = document.querySelector(".show-success"); 

close.forEach( function(element) {

	element.onclick = function() {
		windows.forEach( function(element) {
			element.classList.remove('modal_active');
		});
	}
});



change.onclick = function() {
	firstWindow.classList.remove('modal_active'); 
	secondWindow.classList.add('modal_active'); 
}