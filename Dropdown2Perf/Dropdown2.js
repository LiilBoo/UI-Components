
const BLOCLINKS = document.querySelector('.bloc-links');
const BTN_DROP = document.querySelector('.btn-top');
const LI_ITEMS = document.querySelectorAll('.dropdown li');

let toggleIndex;

BTN_DROP.addEventListener('click', toggleDropDown);

function toggleDropDown(){
    if(!toggleIndex) {
        BLOCLINKS.style.height = `${BLOCLINKS.scrollHeight}px`;
        toggleIndex = true;
        return;
    }

    BLOCLINKS.style.height = 0;
    toggleIndex = false;
}

LI_ITEMS.forEach(li => li.addEventListener('click', toggleDropDown))