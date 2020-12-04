
const changeTimer = function() { 
	const element = document.getElementById("timer");
	element.textContent -= 1;

	if (element.textContent == 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(intervalID);
	}
}


let intervalID = setInterval(changeTimer, 1000); 