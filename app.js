//get DOM elements that interact
const insertNewTask = document.querySelector("div.app header form.insert_task input");
const submitNewTask = document.querySelector("div.app header form.insert_task button.add_task")
const displayTasks = document.querySelector("div.app ul.tasks_list");
const searchTask = document.querySelector("input.search");
const tasksItems = document.getElementsByClassName("task_item");
const numberofTaskSentence = document.querySelector("footer>p.number_of_tasks");
let key = 0;

//proper set dataset for tasks:
function setDataKeyOnTask(){
    key = 0;
    const tasksItemsConverted = [...tasksItems];
    tasksItemsConverted.forEach((item)=>{
        item.dataset.key = "";
    });
    for(let i = 0; i < tasksItemsConverted.length; i++){
        tasksItemsConverted[i].dataset.key = i;
    }
}

//set up template to display task proper way to all tasks:
function taskTemplate(item, text){
    item.className = "task_item";
    item.innerHTML = `${text} <button class="remove_task">Done!</button>`;
};

//info displayed about number of tasks added:
function howManyTasks(){
    const num = tasksItems.length;
    const statement = numberofTaskSentence;
    if(!num){
        statement.textContent = "You've completed all your tasks!";
    } else if(num === 1){
        statement.textContent = "You've collected 1 task so far!";
    } else {
        statement.textContent = `You've collected ${num} tasks!`;
    }
}

//add task, check if empty string, append new list item, set its classes, html, datakey, update number of tasks, when removed - recalculate:
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
        setDataKeyOnTask();
        newTaskBox.querySelector("button.remove_task").addEventListener("click", 
            (e)=>{
                e.target.parentNode.remove();
                howManyTasks();
                setDataKeyOnTask();
        });
    };
    insertNewTask.value = "";
}
//button add task:
submitNewTask.addEventListener("click", addNewTask);

//searching:
searchTask.addEventListener("input", ()=>{
    const mySearch = searchTask.value.toLowerCase();
    let tasksItemsConverted = [...tasksItems];
    tasksItemsConverted.forEach((item)=>{
        item.style.display = "none";
    });
    tasksItemsConverted = tasksItemsConverted.filter(item=>item.textContent.slice(0, (item.textContent.length-5)).toLowerCase().includes(mySearch)); //gets text from item, slices last 5 chars, changes letters to lower, and checks if includes any char from mySearch.
    tasksItemsConverted.forEach(item=>item.style.display = "list-item");
    });