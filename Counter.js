class Counter{
    static howManyTasks(){
        // const num = this.tasksItems.length;
        console.log(this);
        const statement = document.querySelector("footer>p.number_of_tasks");
        if(!num){
            statement.textContent = "You've completed all your tasks!";
        } else if(num === 1){
            statement.textContent = "You've collected 1 task so far!";
        } else {
            statement.textContent = `You've collected ${num} tasks!`;
        }
    }
}