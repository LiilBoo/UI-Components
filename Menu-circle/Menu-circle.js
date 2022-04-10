const btnCircle = document.querySelector('.btn-circle');

const circleMenu = document.querySelector('.circle-menu');

btnCircle.addEventListener("click", () => {
    
    btnCircle.classList.toggle("menu-animation");
circleMenu.classList.toggle("circle-animation");

});