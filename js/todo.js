const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODO_KEY = "todos";
let toDos = [];

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function removeToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveToDo();

}

function makeToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    // const check = document.createElement("input");
    // check.type="checkbox"
    // li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
    span.addEventListener("click", removeToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    makeToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const saveToDos = localStorage.getItem(TODO_KEY);
if (saveToDos !== null) {
    const parseToDo = JSON.parse(saveToDos);
    toDos = parseToDo;
    parseToDo.forEach(makeToDo);
}