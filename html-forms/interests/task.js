const checkMain = Array.from(document.querySelectorAll('div>ul>li>label>input'));
console.log(checkMain); 
const checkEl = Array.from(document.querySelectorAll('.interests_active'));
console.log(checkEl); 


checkMain.forEach(function (element) {
	
	element.addEventListener('change', function() {
	
		for(let i = 0; i < checkMain.length; i++) {
			if (checkMain[i].checked) {

				let path = checkEl[i];
				console.log(path);
				let addCheck = document.querySelectorAll('path>li>label>input');
				console.log(addCheck); 

				addCheck.forEach( function(el) {
					el.checked = true; 
				});

			}
		}

	});

});



