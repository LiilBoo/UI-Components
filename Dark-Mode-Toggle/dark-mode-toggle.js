const TOGGLE_BUTTON = document.querySelector('#toggle');

const BODY_COLOR = document.querySelector('body');

TOGGLE_BUTTON.addEventListener('click', () => {
    BODY_COLOR.classList.toggle("dark-theme")
});