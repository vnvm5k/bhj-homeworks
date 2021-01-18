const interests = Array.from(document.querySelectorAll('.interest'));
for(let i = 0; i < interests.length; i++) {
	console.log(i);
	const checks = Array.from(document.querySelectorAll('.interest__check'));
	checks[i].addEventListener('change', function(ev) {
		if(i === 0 || i === 3) {
			checks[i + 1].checked = true;
			checks[i + 2].checked = true;
		
			if (checks[i].checked == false) {
				checks[i + 1].checked = false;
				checks[i + 2].checked = false;
			}
		}
		ev.preventDefault();
	});
}

