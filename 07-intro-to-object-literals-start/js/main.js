/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

let todos = [
    {
        description: ' Todo 1',
        complete: false,

    },
    {
        description: ' Todo 2',
        complete: true,
    }
];

function calculateCompleteCount() {
    let reduced = todos.reduce((count, todo) => {
        if (todo.complete) {
            return count + 1;
        }
        else {
            return count;
        }
    }, 0);

    let completedPercentage = `${reduced / todos.length * 100}%`;
    document.querySelector('#todo-complete-count').innerHTML = completedPercentage
}

function renderTodos() {
    calculateCompleteCount();
    let str = '';
    todos.forEach((element, index) => {
        let CheckText='';
        if(element.complete){
            CheckText= 'checked'
        }
        str += `<li class="list-group-item"><input class="form-check-input todo-status"data-todo-id="${index}"type="checkbox"value="todo-${index}"${CheckText}>${element.description}</li>`
    })
    document.querySelector('.todo-list').innerHTML = str;
}
renderTodos()

const form= document.querySelector('.form-control');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    let newObject = {description: ` ${event.target.elements['todo-description'].value}`, complete: false}
    todos.push(newObject)
    console.log(newObject)
    console.log(todos)
    renderTodos()
    event.target.name.value = '';
})

let checkboxes=document.querySelector('.todo-list')

checkboxes.addEventListener('change',(event)=>{
    if(event.target.checked){
        todos[event.target.getAttribute('data-todo-id')].complete= true;
    }
    else{
        todos[event.target.getAttribute('data-todo-id')].complete= false;
    }
    calculateCompleteCount();
})

