const js_clock = document.querySelector(".js_clock"),
    js_clock_h1 = js_clock.querySelector("h1");


function clock_changecolor() {
    js_clock.classList.toggle("clicked");
}

function clock_timeset() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    js_clock_h1.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
    js_clock_h1.addEventListener('click', clock_changecolor);
    setInterval(clock_timeset, 1000);
}

init();