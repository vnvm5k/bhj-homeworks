let even = true; 
const picture = document.getElementById("cookie"); 
const counter = document.getElementById("clicker__counter");

picture.onclick = function() {

	counter.textContent = parseInt(counter.textContent) + 1;
	
	if (even) {
		picture.width = 300;
		even = false;
	} else {
		picture.width = 200;
		even = true;
    }
}