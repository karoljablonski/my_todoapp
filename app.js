//get DOM elements that interact
const insertNewTask = document.querySelector("div.app header form.insert_task input");
const submitNewTask = document.querySelector("div.app header form.insert_task button.add_task")
const displayTasks = document.querySelector("div.app ul.tasks_list");
const searchTask = document.querySelector("input.search");
const numberOfTask = document.querySelector("footer p.number_of_tasks span");
const tasksItems = document.querySelectorAll("div.app ul.tasks_list>li");

//so we want to: get input after clicking '+', put that into needed 'box' which at last should be 'li' and add it to ul.tasks_list.
//set up template to display task proper way to all tasks:
function taskTemplate(item, text){
    item.className = "task_item";
    item.innerHTML = `${text} <button class="remove_task">Usuń</button>`;
};

//run after adding task:
function addNewTask(e){
    e.preventDefault();
    if(insertNewTask.value == ""){
        return;
    } else {
    const newTask = insertNewTask.value;
    const newTaskBox = document.createElement("li");
    displayTasks.appendChild(newTaskBox);
    taskTemplate(newTaskBox, newTask);
    insertNewTask.value = "";
    }
}


submitNewTask.addEventListener("click", addNewTask);