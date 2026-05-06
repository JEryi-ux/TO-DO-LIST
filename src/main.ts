console.log("UPDATED NOW");
document.getElementById("input") as HTMLInputElement;
document.getElementById("button") as HTMLButtonElement;
document.getElementById("ul") as HTMLUListElement;

const list = document.getElementById("ul") as HTMLUListElement;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

let todos: Todo[] = [];
  
const input = document.getElementById("input") as HTMLInputElement;
function addTodo(){
 const text = input.value;
 console.log(text);
  const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  return newTodo;
}

function renderTodos(): void {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.completed) {
      li.textContent = "✅ " + todo.text;
    } else {
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

function toggleTodo(id: number){
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


function deleteTodo(id: number): void {
  todos = todos.filter((todo) => {
    return todo.id !== id;
  });

  renderTodos();
}



const button = document.getElementById("button") as HTMLButtonElement;
button.addEventListener("click",()=>{
   todos.push(addTodo());
  renderTodos();
  console.log(todos);
});

