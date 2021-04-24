const js_clock = document.querySelector(".js_clock"),
    js_clock_h1 = js_clock.querySelector("h1");

const COLORS = ["clicked_red", "clicked_orange", "clicked_yellow", "clicked_green", "clicked_blue", "clicked_nam", "clicked_bo", "clicked_pink", "clicked_black"];

let curColor = 0;

function settime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    js_clock_h1.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function click_clock() {
    js_clock.classList.remove(COLORS[curColor-1]);
    js_clock.classList.add(COLORS[curColor]);

    if(curColor - 1 < 0) {
        js_clock.classList.remove(COLORS.length-1);
    }
    if(++curColor >= COLORS.length) {
        js_clock.classList.remove(COLORS[curColor-1]);
        curColor = 0;
    }
}

function init() {
    setInterval(settime, 1000);
    js_clock.addEventListener("click", click_clock);
}

init();