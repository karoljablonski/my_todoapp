//get DOM elements that interact
const insertNewTask = document.querySelector("div.app header form.insert_task input");
const submitNewTask = document.querySelector("div.app header form.insert_task button.add_task")
const displayTasks = document.querySelector("div.app ul.tasks_list");
const searchTask = document.querySelector("input.search");
const tasksItems = document.getElementsByClassName("task_item");
const numberofTaskSentence = document.querySelector("footer>p.number_of_tasks");
let key = 0;
//so we want to: get input after clicking '+', put that into needed 'box' which at last should be 'li' and add it to ul.tasks_list.
//set up template to display task proper way to all tasks:
function taskTemplate(item, text){
    item.dataset.key = key;
    key++;
    item.className = "task_item";
    item.innerHTML = `${text} <button class="remove_task">Done!</button>`;
};

function howManyTasks(){
    const num = tasksItems.length;
    const statement = numberofTaskSentence;
    if(!num){
        statement.textContent = "You've accomplished all your tasks!";
    } else if(num === 1){
        statement.textContent = "You've collected 1 task so far!";
    } else {
        statement.textContent = `You've collected ${num} tasks!`;
    }
}

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
        howManyTasks();
        newTaskBox.querySelector("button.remove_task").addEventListener("click", 
            (e)=>{
                e.target.parentNode.remove();
                howManyTasks();
        });
};
insertNewTask.value = "";
}


submitNewTask.addEventListener("click", addNewTask);