const widget = document.querySelector(".chat-widget"); 
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
const robotPhrases = [
'123',
'456',
'789',
'101112'
];



widget.addEventListener('click', function() {
	widget.classList.add('chat-widget_active'); 
})



input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
    	messages.innerHTML += `
			<div class="message">
			  <div class="message__time"></div>
			  <div class="message__text">
			    
			  </div>
			</div>

			<div class="message message_client">
			  <div class="message__time"></div>
			  <div class="message__text">
			
			  </div>
			</div>
			`;
		let time = Array.from(document.querySelectorAll('.message__time'));
		let botMessage = document.querySelectorAll('.message > .message__text');
		let clientMessage = document.querySelectorAll('.message_client > .message__text'); 
		

		time.forEach(function (el) {
			el.textContent = new Date().toLocaleTimeString(); 
		})

		let random = function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		
		botMessage.textContent = robotPhrases[random(0, robotPhrases.length)];
		clientMessage.textContent = input.value; 
    }
  });