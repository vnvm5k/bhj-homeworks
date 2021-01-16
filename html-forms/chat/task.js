const widget = document.querySelector(".chat-widget"); 
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
const robotPhrases = [
'Никого нет дома',
'Скатерью дорога',
'Что-нибудь еще?',
'Какая жалость'
];



widget.addEventListener('click', function() {
	widget.classList.add('chat-widget_active'); 
})



input.addEventListener('keydown', function(e) {
    let random = function (min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	let botMessage = robotPhrases[random(0, robotPhrases.length)];;
	let clientMessage = input.value; 
	let time = new Date().toLocaleTimeString(); 

		
    if (e.keyCode === 13) {
    	messages.innerHTML += `
			<div class="message">
			  <div class="message__time">${time}</div>
			  <div class="message__text">
			    ${botMessage}
			  </div>
			</div>

			<div class="message message_client">
			  <div class="message__time">${time}</div>
			  <div class="message__text">
			  	${clientMessage}
			  </div>
			</div>
			`;

    }
  });