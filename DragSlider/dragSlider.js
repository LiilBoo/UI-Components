//**Drag effect*/

const slider = document.querySelector('.slideshow-container');

let holding = false;

let firstClickX;

let alreadyLeftCrolled;

//*.ScrollLeft is a distance

slider.addEventListener("mousedown", e => {

    holding = true;

    firstClickX = e.pageX - slider.offsetLeft;

    alreadyLeftCrolled = slider.scrollLeft;

    stopTransition();

});

slider.addEventListener("mousemove", e => {
    if(!holding) return;

    const x = e.pageX - slider.offsetLeft;

    const scrolled = ((x - firstClickX) * 2);
    //parentheses for future calcs
    //* *2 to add speed

    const prevScrollLeft = slider.scrollLeft;

    slider.scrollLeft = alreadyLeftCrolled - scrolled;

    //Setting velocity
    velocity = slider.scrollLeft - prevScrollLeft;


});


slider.addEventListener("mouseup", () => {
    holding = false;
    startTransition();
});

slider.addEventListener("mouseleave", () => {
    holding = false;

});

//*---Adding animation---*/

let velocity;

let rafID;
//? what is rafID;

//* requestAnimationFrame && cancelAnimationFrame are frozen built-in functions

function startTransition() {

    stopTransition();
    //*stops already ongoing transition

    rafID = requestAnimationFrame(decreasingTransition);
};

function stopTransition() {

    cancelAnimationFrame(rafID);
};

function decreasingTransition() {

    slider.scrollLeft += velocity;
    velocity *= 0.95;

    if (Math.abs(velocity) > 0.5){
        rafID = requestAnimationFrame(decreasingTransition)
    }
};

slider.addEventListener("touchstart", e => {
    
    holding = true;
    firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;

    alreadyLeftCrolled = slider.scrollLeft;

    stopTransition();
});

slider.addEventListener("touchend", () => {
    
    holding = false;
    
    startTransition();
});

slider.addEventListener("touchmove",e => {
    if(!holding) return;

    const x = e.targetTouches[0].pageX - slider.offsetLeft;

    const scrolled = ((x - firstClickX) * 2);

    const prevScrollLeft = slider.scrollLeft;

    slider.scrollLeft = alreadyLeftCrolled - scrolled;

    velocity = slider.scrollLeft - prevScrollLeft;
});