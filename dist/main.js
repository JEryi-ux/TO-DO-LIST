console.log("UPDATED NOW");
document.getElementById("input");
document.getElementById("button");
document.getElementById("ul");
const list = document.getElementById("ul");
let todos = [];
const input = document.getElementById("input");
function addTodo() {
    const text = input.value;
    console.log(text);
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
    };
    return newTodo;
}
function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        if (todo.completed) {
            li.textContent = "✅ " + todo.text;
        }
        else {
            li.textContent = todo.text;
        }
        li.addEventListener("click", () => {
            toggleTodo(todo.id);
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteTodo(todo.id);
        });
        li.appendChild(document.createTextNode(" "));
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
function toggleTodo(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed,
            };
        }
        return todo;
    });
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter((todo) => {
        return todo.id !== id;
    });
    renderTodos();
}
const button = document.getElementById("button");
button.addEventListener("click", () => {
    todos.push(addTodo());
    renderTodos();
    console.log(todos);
});
export {};
//# sourceMappingURL=main.js.map