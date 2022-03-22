const THE_SLIDER = document.querySelector('#my-slider');

const sliderValue = document.querySelector('#slider-value');

function toSlide() {
    let valPercent = (THE_SLIDER.value / THE_SLIDER.max) * 100;

    console.log(valPercent);

    THE_SLIDER.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`
    sliderValue.textContent = THE_SLIDER.value;
}

THE_SLIDER.addEventListener('input', toSlide)
