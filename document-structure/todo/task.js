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
  for (let key in localStorage) {
    let task = localStorage.getItem(`${key}`);
    if(typeof task === "string") {
      displayMessage += 
      	`<div class="task">
          	<div class="task__title">${task}</div>
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
  let i = target.closest('.task').children[0].innerHTML;
  console.log(i);
  console.log(localStorage); 
  for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue; 
    }
    else if(localStorage[key] == i) {
      let del = key;
      localStorage.removeItem(`${del}`); 
    }
} 

	displayMessages();
});