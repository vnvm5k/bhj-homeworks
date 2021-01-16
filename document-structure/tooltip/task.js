document.addEventListener('click', function(event) {
	let a = event.target;
	a.style.position = "relative";
	if(!a.classList.contains('has-tooltip')) return; 
	let div = document.createElement('div');
	div.className = "tooltip"; 
	div.innerText = a.title;
	div.style.width = "fit-content"; 
	a.insertAdjacentElement('afterend', div)	

	div.classList.toggle('tooltip_active');
	let position = a.getBoundingClientRect();
	div.style.left = position.left + "px";
	event.preventDefault();
})