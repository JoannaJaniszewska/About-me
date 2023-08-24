{
const welcome = () => {
    console.log("Welcome to all devs checking in");
}

const toggleBackground = () => {    
    const body = document.documentElement;
    const themeName = document.querySelector(".themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "bright" : "dark";
    };
 
const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);

    welcome();
    };
    
    init();
}