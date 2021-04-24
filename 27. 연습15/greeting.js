const form = document.querySelector(".js_form"),
    form_input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");
    

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

//


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = form_input.value;
    saveName(currentValue);
    paintgreeting(currentValue);
}

function askforname() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

//

function paintgreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `반가워, ${text}`;
}

//

function LoadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null) {
        askforname();
    } else {
        paintgreeting(currentUser);
    }
}

//

function init() {
    LoadName();
}

init();