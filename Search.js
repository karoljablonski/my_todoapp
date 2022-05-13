class Search{
    static searching(){
            const searchTask = document.querySelector("input.search");
            const mySearch = searchTask.value.toLowerCase();
            let tasksItemsConverted = [...document.getElementsByClassName("task_item")];
            tasksItemsConverted.forEach((item)=>{
                item.style.display = "none";
            });
            tasksItemsConverted = tasksItemsConverted.filter(item=>item.textContent.slice(0, (item.textContent.length-5)).toLowerCase().includes(mySearch)); //gets text from item, slices last 5 chars, changes letters to lower, and checks if includes any char from mySearch.
            tasksItemsConverted.forEach(item=>item.style.display = "flex");
    }
    static showSearchBar(){
        const searchTask = document.querySelector("input.search");
        if(this.flagForSearchTaskDisplay){
            searchTask.style.display = "block";
            this.flagForSearchTaskDisplay = false;
        } else {
            searchTask.style.display = "none";
            this.flagForSearchTaskDisplay = true;
            let tasksItemsConverted = [...document.getElementsByClassName("task_item")];
            tasksItemsConverted.forEach((item)=>{
                item.style.display = "flex";
            });
            searchTask.value = "";
        }
    }
}