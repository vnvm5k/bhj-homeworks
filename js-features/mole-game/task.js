const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for(let i = 1; i < 10; i++) {

	getHole = i => document.getElementById(`hole${i}`);
	getHole(i).onclick = function() {
		if (getHole(i).className.includes('hole_has-mole')) {

			dead.textContent = parseInt(dead.textContent) + 1;
			if (dead.textContent == 10) {
				alert("Вы победили!")
				dead.textContent = 0; 
			} 
		}
		else {
			lost.textContent = parseInt(lost.textContent) + 1; 
			if (lost.textContent == 5) {
				alert("Вы проиграли!")
				lost.textContent = 0; 
			} 
		}
		
	}

}
