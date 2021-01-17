document.addEventListener('click', function(event) {
	let target = event.target;
	if(!target.classList.contains('has-tooltip')) return;
	let tip = document.querySelector('.tooltip'); 
	target.style.position = "relative";
	tip.innerHTML = target.title; 
	tip.classList.toggle('tooltip_active');
	let position = target.getBoundingClientRect();
	tip.style.left = position.left + "px";
	tip.style.top = position.top + 20 + "px";
	event.preventDefault();
})





