var addButton = document.getElementById("add");
var todoList = document.getElementById("todos");
var h2 = document.getElementById('empty');
var input = document.getElementById("input");
var deleteBtn = document.getElementById("delete");
var importantBtn = document.getElementById("important");

var selectedTodo;

function doneSelect(event){
	event.target.classList.toggle("done");
	event.target.classList.toggle("selected");
	selectedTodo = event.target;
	console.log("Worked!");
}

//create a todo item
function createTodo(){
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
function deleteTodo(){
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
