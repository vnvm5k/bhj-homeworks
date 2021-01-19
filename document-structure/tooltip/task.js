document.addEventListener('click', function(event) {
	let target = event.target;
	if(!target.classList.contains('has-tooltip')) return;
	let tip = document.querySelector('.tooltip'); 
	target.style.position = "relative";
	let position = target.getBoundingClientRect();
	tip.style.left = position.left + "px";
	tip.style.top = position.top + 20 + "px";

	if(tip.innerHTML == target.title){
		tip.classList.toggle('tooltip_active');
		tip.innerHTML = target.title;
	} else {
		tip.innerHTML = target.title;
		tip.classList.add('tooltip_active');
	}
	
	
	event.preventDefault();
})





