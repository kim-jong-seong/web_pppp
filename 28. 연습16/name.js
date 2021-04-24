const js_form = document.querySelector(".js_form"),
    js_form_input = js_form.querySelector("input"),
    js_greeting = document.querySelector(".js_greeting");
    
const LOCAL_NAME = "Name",
    CMD_SHOWING = "showing";

function Handle_Submit(event) {
    event.preventDefault();
    const INPUT_NAME = js_form_input.value;
    localStorage.setItem(LOCAL_NAME, INPUT_NAME);
    js_form.classList.remove(CMD_SHOWING);
    Painting_Name(INPUT_NAME);

}

function Handle_Save() {
    js_form.classList.add(CMD_SHOWING);
    js_form.addEventListener("submit", Handle_Submit);
}

function Painting_Name(NAME) {
    js_greeting.classList.add(CMD_SHOWING);
    js_greeting.innerText = `어서와 ${NAME}`;
}

function NameBox() {
    const LOCAL_SAVE_NAME = localStorage.getItem(LOCAL_NAME);

    if(LOCAL_SAVE_NAME === null) {
        Handle_Save();
    } else {
        Painting_Name(LOCAL_SAVE_NAME);
    }
}

function init() {
    NameBox();
}

init();