function addtask(){
    let taskInput=
    document.getElementById("taskInput");
    let task = taskInput.Value.trim();

    if (task=== "") return;

    let tasklist=document.getElementById("tasklist");
    let li = document.createElement("li");
    li.textContent = task ;
    li.onclick = function () {
        li.classList.toggle("completed"
        );
        saveTasks();
    };

    let deleteBtn= document.createElement("button");
    deleteBtn.textContent= "X";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    saveTasks();
};

li.appendChild(deleteBtn);
tasklist.appendChild(li);
taskInput.value = "";

saveTasks();
}

function saveTasks() {
    let list =
    document.getElementById("taskList").innerHTML
    localStorage.setItem("tasks" , list);
}
function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
}
loadTasks