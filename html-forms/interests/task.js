/*const checkMain = Array.from(document.querySelectorAll('div>ul>li>label>input'));
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

*/

const interests = Array.from(document.querySelectorAll('.interest'));
for(let i = 0; i < interests.length; i++) {
	const checks = Array.from(document.querySelectorAll('.interest__check'));
	checks[i].addEventListener('change', function(ev) {
		checks[i + 1].checked = true;
		checks[i + 2].checked = true;
	
		if (checks[i].checked == false) {
			checks[i + 1].checked = false;
			checks[i + 2].checked = false;
		}
		ev.preventDefault();
		
	});
}

