let addMessage = document.querySelector('.tasks__input'), 
    addButton = document.querySelector('.tasks__add'), 
    todo = document.querySelector('.tasks__list');
    remove = Array.from(document.querySelectorAll('.task__remove'));

if(localStorage.length == 0) {  
  let array = [];
  localStorage.todo = JSON.stringify(array); 
}

if(localStorage.todo){
  displayMessages();
} 

addButton.addEventListener('click', function(event){
  event.preventDefault();
  if(!addMessage.value) return;
  let newTodo = JSON.parse(localStorage.todo);
  newTodo.push(addMessage.value);
  localStorage.todo = JSON.stringify(newTodo); 
  displayMessages();
  addMessage.value = '';
});

function displayMessages() {
  let displayMessage ='';
  if((JSON.parse(localStorage.todo)).length === 0) todo.innerHTML = '';
  let task = JSON.parse(localStorage.todo);
  task.forEach(element => {
      displayMessage += 
      	`<div class="task">
          	<div class="task__title">${element}</div>
            <a href="#" class="task__remove">&times;</a>
      	</div>
      	`;
    todo.innerHTML = displayMessage; 
  });
}

todo.addEventListener('click', function(event){
	event.preventDefault();
  let target = event.target;
  let i = target.closest('.task').children[0].innerHTML;
  let deleteTask = JSON.parse(localStorage.todo);
  let findTask = deleteTask.findIndex(element => element == i) 
  deleteTask.splice(findTask,1);
  localStorage.removeItem('todo');
  localStorage.todo = JSON.stringify(deleteTask);   
	displayMessages();
});