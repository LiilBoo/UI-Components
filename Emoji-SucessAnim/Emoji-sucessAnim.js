const CONTAINER_SLOT = document.querySelector('.slot');

const BTN_CONFETTIS = document.querySelector('.btn-confettis');

const emojis = ["⭐","🌠","⚡", "✨",];

BTN_CONFETTIS.addEventListener("click", createMagic);

function createMagic() {

    // if(isAnimating()) return;

    for(let i = 0; i < 100; i++) {
    
        const confettis = document.createElement('div');

        confettis.innerText = emojis[Math.floor(Math.random() *  emojis.length)];

        CONTAINER_SLOT.appendChild(confettis);
    
    
    }

    sendMagic();

};

function sendMagic() {

    const TLMAGIC = gsap.timeline();

    TLMAGIC
    .to('.slot div' , {
      y: "random(-100,100)",
      x: "random(-100,100)", 
      z: "random(0,1000)",
      rotation: "random(-90,90)",
      duration: 1
    })
    .to('.slot div', {autoAlpha: 0, duration: 0.3},'-=0.2')
    .add(() => {
        CONTAINER_SLOT.innerHTML = "";
    })
};