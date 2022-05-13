class App{
    constructor(){
        this.insertNewTask = document.querySelector("div.app header form.insert_task input");
        this.displayTasks = document.querySelector("div.app ul.tasks_list");
        this.searchTask = document.querySelector("input.search");
        
        document.querySelector("div.app header form.insert_task button.add_task").addEventListener("click", this.addNewTask.bind(this));
    }
    addNewTask(e){
        e.preventDefault();
        if(this.insertNewTask.value == ""){
            return;
        } else {
            // const newTask = this.insertNewTask.value;
            const newTask = new Task(this.insertNewTask.value);
            const newTaskBox = document.createElement("li");
            this.displayTasks.appendChild(newTaskBox);
            // taskTemplate(newTaskBox, newTask);
            newTask.createTaskTemplate(newTaskBox, newTask.content);
            Counter.howManyTasks();
            console.log(this);
            // howManyTasks();
            newTask.setDataKeyOnTask();
            // setDataKeyOnTask();
            newTaskBox.querySelector("button.remove_task").addEventListener("click", 
                (e)=>{
                    e.target.parentNode.remove();
                    Counter.howManyTasks();
                    // newTask.setDataKeyOnTask();
                    console.log("clicked");
            });
        };
        this.insertNewTask.value = "";
    }
}