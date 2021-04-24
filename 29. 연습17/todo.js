const js_form_todo = document.querySelector(".js_form_todo"),
    todo_input = js_form_todo.querySelector("input"),
    js_todo_List = document.querySelector(".js_todoList");

const TODOS_LS = "todos";

let todos = [];
let idnum = 1;

function deletetodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    js_todo_List.removeChild(li);
    const cleantodos = todos.filter(function (todo) {
        return todo.id != parseInt(li.id);
    });
    todos = cleantodos;
    savetodos();
}

function savetodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function todo_create(text) {
    const li = document.createElement("li");
    const del = document.createElement("button");
    const span = document.createElement("span");
    const newid = idnum;

    idnum += 1;

    span.innerText = ` ${text} `;
    del.innerText = "📌";

    span.classList.add("deletebox_span");
    del.classList.add("deletebox");

    del.addEventListener("click", deletetodo);

    li.appendChild(del);
    li.appendChild(span);
    js_todo_List.appendChild(li);
    
    li.id = newid;

    const todoobj = {
        text: text,
        id: newid,
    }

    todos.push(todoobj);
    savetodos();
    
}

function todo_Submit(event) {
    event.preventDefault();
    todo_create(todo_input.value);
    todo_input.value = "";
}

function loadtodos() {
    const loadedtodos = localStorage.getItem(TODOS_LS);
    if(loadedtodos !== null) {
        const parsedtodos = JSON.parse(loadedtodos);
        parsedtodos.forEach(function (todo){
            todo_create(todo.text);
        });
    }
}

function init() {
    loadtodos();
    js_form_todo.addEventListener("submit", todo_Submit);
}

init();