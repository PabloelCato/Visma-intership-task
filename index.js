const input = document.getElementById("input");
const deadlineInput = document.getElementById("deadline");
const button = document.getElementById("add");

const todos = JSON.parse(sessionStorage.getItem("todos")) || [];



button.addEventListener("click", function() {
    const todo = input.value.trim();
    const deadline = deadlineInput.value.trim();

    todos.push({ text: todo, deadline: deadline, done:false });
    sessionStorage.setItem("todos", JSON.stringify(todos));
    
    

    input.value = "";
    deadlineInput.value = "";
});




