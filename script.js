let time = document.querySelector(".time");

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)

let modeSwitch = document.querySelector("input");

modeSwitch.addEventListener("change",(evt) => {
    if (modeSwitch.checked) {
        console.log("Dark mode enabled");
        document.body.classList.add("dark-mode");
        document.documentElement.style.setProperty("--main-color", "white");
    } else {
        console.log("Light mode enabled");
        document.body.classList.remove("dark-mode");
        document.documentElement.style.setProperty("--main-color", "black");
    }
})