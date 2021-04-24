const form = document.querySelector('.js-form'),
    input = form.querySelector('input');

const USER_LS = "currentUser";

function init() {
    const currentUser = localStorage.getItem(USER_LS);
}

init();