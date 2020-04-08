const addButton = document.getElementById("add");
const todoList = document.getElementById("todos");
const h2 = document.getElementById('empty');
const input = document.getElementById("input");
const deleteBtn = document.getElementById("delete");

let selectedTodo;

const doneSelect = (event) => {
	event.target.classList.toggle("done");
	event.target.classList.toggle("selected");
	selectedTodo = event.target;
}

//create a todo item
const createTodo = () => {
	if(input.value.length > 0){
		var todo = document.createElement("li");
		//adding content to the new item
		todo.appendChild(document.createTextNode(input.value));
		//adding eventListener
		todo.addEventListener("click", doneSelect);

		//adding new item to the list
		todoList.appendChild(todo);

		input.value = "";
	}

	else{
		input.classList.toggle("shake");
	}
}


//remove todo
const deleteTodo = () => {
	if(selectedTodo != undefined){
		todoList.removeChild(selectedTodo);
		selectedTodo = undefined;
	}

	selectedTodo = undefined;
}

input.addEventListener("keypress", function(event){
	if(event.which === 13){
		createTodo();
	}
})
addButton.addEventListener("click", createTodo);
deleteBtn.addEventListener("click", deleteTodo);
