let addMessage = document.querySelector('.tasks__input'), 
    addButton = document.querySelector('.tasks__add'), 
    todo = document.querySelector('.tasks__list');
    remove = Array.from(document.querySelectorAll('.task__remove'));
let todoList = [];

if(localStorage.getItem('todo')){
	todoList = JSON.parse(localStorage.getItem('todo')); 
	displayMessages();
}

addButton.addEventListener('click', function(event){

   if(!addMessage.value) return; 
  let newTodo = {
  	todo: addMessage.value, 
  };

  todoList.push(newTodo); 
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList)); 
  addMessage.value = ''; 
  event.preventDefault();
});

function displayMessages(){
  let displayMessage ='';
  if(todoList.length ===0) todo.innerHTML = ''; 
  todoList.forEach(function(item) {
    displayMessage += 
    	`<div class="task">
        	<div class="task__title">
        	${item.todo}
            </div>
            <a href="#" class="task__remove">&times;</a>
    	</div>
    	`;
    todo.innerHTML = displayMessage; 
  });
}

todo.addEventListener('click', function(event){
	event.preventDefault();
	let i = remove.indexOf(event.target); 
	todoList.splice(i,1);
	displayMessages();
	localStorage.setItem('todo', JSON.stringify(todoList)); 
	 
});