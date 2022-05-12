class Task{
    constructor(content){
        this.content = content;
        this.className = "task_item";
        this.tasksItems = document.getElementsByClassName("task_item");
    }
    createTaskTemplate(item, text){
        item.className = this.className;
        item.innerHTML = `<label for="">
        <input hidden type="checkbox" id="">
        <span class="my_checkbox"></span>
        <span class="my_task">${text}</span>
        </label><button class="remove_task">Done!</button>`;
    }
    setDataKeyOnTask(){
        let key = 0;
        const tasksItemsConverted = [...this.tasksItems];
        tasksItemsConverted.forEach((item)=>{
            item.dataset.key = "";
            item.children[0].htmlFor = "";
            item.children[0].children[0].id = "";
        });
        for(let i = 0; i < tasksItemsConverted.length; i++){
            tasksItemsConverted[i].dataset.key = i;
            tasksItemsConverted[i].children[0].htmlFor = `test${i}`;
            tasksItemsConverted[i].children[0].children[0].id = `test${i}`;
        };
    }
    showContent(){
        console.log(this.content);
    }
}