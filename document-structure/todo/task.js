let addMessage = document.querySelector('.tasks__input'), 
    addButton = document.querySelector('.tasks__add'), 
    todo = document.querySelector('.tasks__list');
    remove = Array.from(document.querySelectorAll('.task__remove'));
    number = 0;

if(localStorage.length > 0){
  displayMessages();
}   


addButton.addEventListener('click', function(event){
  event.preventDefault();
   if(!addMessage.value) return; 
  let newTodo = addMessage.value;
  localStorage.setItem(`todo${number}`, newTodo); 
  displayMessages();
  addMessage.value = '';
  number++;
   
});

function displayMessages() {
  let displayMessage ='';
  if(localStorage.length === 0) todo.innerHTML = ''; 
  for (let i = 0; i<=localStorage.length; i++) {
    let task = localStorage.getItem(`todo${i}`);
    if(typeof task === "string") {
      displayMessage += 
      	`<div class="task">
          	<div class="task__title">
          	${task}
            </div>
            <a href="#" class="task__remove">&times;</a>
      	</div>
      	`;
    }
    todo.innerHTML = displayMessage; 
  }
}

todo.addEventListener('click', function(event){
	event.preventDefault();
  let target = event.target;
  let array = Array.from(document.getElementsByClassName('task'));
  let i = (array.indexOf(target.closest('.task')));
  localStorage.removeItem(`todo${i}`); 
	displayMessages();
});