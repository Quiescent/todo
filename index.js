const form = document.querySelector("form");
const list = document.getElementById("todos");

const removeTodoEventListener = (clickEvent) => {
    list.removeChild(clickEvent.target.parentNode)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoNameElement = document.getElementById("todo-name");
    const element = document.createElement("li");
    element.innerText = todoNameElement.value;
    const removeButton = document.createElement("button");
    removeButton.innerText = 'X';
    element.appendChild(removeButton);
    removeButton.addEventListener('click', removeTodoEventListener)
    list.appendChild(element);
    todoNameElement.value = '';
});

window.addEventListener('beforeunload', (event) => {
    alert("blah!");
    localStorage.setItem('state', list.innerHTML);
})

window.addEventListener('load', (event) => {
    list.innerHTML = localStorage.getItem('state')
    document.querySelectorAll('li > button').forEach((button) => {
        button.addEventListener('click', removeTodoEventListener)
    })
})
