class Counter{
    static howManyTasks(){
        this.num = document.getElementsByClassName("task_item").length;
        // const num = this.tasksItems.length;
        console.log(this);
        const statement = document.querySelector("footer>p.number_of_tasks");
        if(!this.num){
            statement.textContent = "You've completed all your tasks!";
        } else if(this.num === 1){
            statement.textContent = "You've collected 1 task so far!";
        } else {
            statement.textContent = `You've collected ${this.num} tasks!`;
        }
    }
}
