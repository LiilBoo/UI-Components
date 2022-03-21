const btn = document.querySelector('.btn');

const box = document.querySelector('.box');

const txt = document.querySelector('.txt');

btn.addEventListener("click", () => {
    box.classList.toggle("animate")
    txt.classList.toggle("animate-P")
})