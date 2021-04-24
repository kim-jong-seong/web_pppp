const js_clock = document.querySelector('.js_clock'),
    js_clock_title = js_clock.querySelector('h1');

function clock_timeset() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    js_clock_title.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}:${minute < 10 ? `0${minute}` : `${minute}`}:${second < 10 ? `0${second}` : `${second}`}`;
}
function init() {
    setInterval(clock_timeset, 1000);
    js_clock_title.addEventListener('click', function() {
    js_clock.classList.toggle('clicked');
    });
}

init();