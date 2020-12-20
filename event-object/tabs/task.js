let tabs = Array.from(document.querySelectorAll('.tab')); 
let contents = Array.from(document.querySelectorAll('.tab__content'));
tabs.forEach(function(element) {
	element.addEventListener('click', function() {
		let activeTab = tabs.findIndex(el => el.classList.contains('tab_active'));
		let activeContent = contents.findIndex(el => el.classList.contains('tab__content_active'));
		tabs[activeTab].classList.toggle('tab_active');
		contents[activeContent].classList.toggle('tab__content_active');
		
		element.classList.toggle('tab_active');
		let activeTab2 = tabs.findIndex(el => el.classList.contains('tab_active'));
		contents[activeTab2].classList.toggle('tab__content_active');
	})
})