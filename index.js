const input = document.getElementById("input");
const button = document.getElementById("add");

const todos = JSON.parse(sessionStorage.getItem("todos")) || [
    { text: "Get intership in Visma", deadline: "2023-03-29", done: false },
    { text: "Get grocerys", deadline: "2023-03-27", done: true }
];

renderTodos();

button.addEventListener("click", function() {
    const todo = input.value.trim();
    const deadline = document.getElementById("deadline").value.trim();
    

    todos.push({ text: todo, deadline: deadline, done:false });
    sessionStorage.setItem("todos", JSON.stringify(todos));
    
    renderTodos();

    input.value = "";
    document.getElementById("deadline").value = "";
});

function renderTodos() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    todos.forEach(function (todo,index) {
        
        const li = document.createElement("li");
       
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        
        const span = document.createElement("span");
        span.textContent = todo.text;
        
        const deadlineSpan = document.createElement("span");
        deadlineSpan.textContent = ` (${todo.deadline})`;
        
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", function () {
            const confirmed = confirm("Are you done with our task?")
            if (confirmed) {
            todos.splice(index, 1);
            sessionStorage.setItem("todos", JSON.stringify(todos));

            renderTodos();
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deadlineSpan);
        li.appendChild(button);

        list.appendChild(li);
    


checkbox.addEventListener("change", function () {
    todos[index].done = checkbox.checked;
    sessionStorage.setItem("todos", JSON.stringify(todos));

    if (checkbox.checked) {
        span.style.textDecoration = "line-through"
    } else {
        span.style.textDecoration = "none";
    }
});
});
}