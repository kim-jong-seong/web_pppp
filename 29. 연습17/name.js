const js_form = document.querySelector(".js_form"),
    js_form_input = js_form.querySelector("input"),
    js_greeting = document.querySelector(".js_greeting");

    const LOCAL_NAME_KEY = "name";
    const CLASS_SHOW = "showing";

function StandByName_Submit(event) {
    event.preventDefault();
    localStorage.setItem(LOCAL_NAME_KEY, js_form_input.value);
    js_form.classList.remove(CLASS_SHOW);
    PaintingName(js_form_input.value);
}

function StandByName() {
    js_form.classList.add(CLASS_SHOW);
    js_form.addEventListener("submit", StandByName_Submit);
}

function PaintingName(NAME) {
    js_greeting.classList.add(CLASS_SHOW);
    js_greeting.innerText = `어서오세요. ${NAME}님 반갑습니다.`;
}

function Scan_Name(){
    const LOCAL_NAME = localStorage.getItem(LOCAL_NAME_KEY);

    if(LOCAL_NAME === null) {
        StandByName();
    } else {
        PaintingName(LOCAL_NAME);
    }
}

function init() {
    Scan_Name();
}

init();