const toApp = document.getElementById("toApp");
const greetingsPage = document.querySelector("div.greetings");
toApp.addEventListener("click", ()=>{
    greetingsPage.classList.add("greetings_animation");
    setTimeout(()=>{
        greetingsPage.style.display = "none";
    }
    , 1000);
    //dodac jakas animacje prostą :)
})