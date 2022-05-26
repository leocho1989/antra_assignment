

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {

    //   console.log(todos);
    const todoList = document.getElementById("todo-list");
        todoList.innerHTML = "";
    // console.log(todoList);
        todos.map((todo) => todo.value = todoList.innerHTML += 
        `<div class="todo_box">
        <li>  UserId: ${todo.userId} </li>
        <li> Todo Id: ${todo.id} </li>
        <li> Todo Title: ${todo.title} </li>
        <li> Completed: ${todo.completed} </li>
        </div>
        ` );

    });