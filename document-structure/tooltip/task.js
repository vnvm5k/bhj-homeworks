document.addEventListener('click', function(event) {
	let a = event.target;
	if(!a.classList.contains('has-tooltip')) return; 
	a.style = "position: relative";
	let div = document.createElement('div');
	div.className = "tooltip";
	div.style = "left: 0; top: 0"; 
	div.innerText = a.title;
	a.insertAdjacentElement('beforeend', div)	

	div.classList.toggle('tooltip_active');
	event.preventDefault();
})