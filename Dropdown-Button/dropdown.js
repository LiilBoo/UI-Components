const dropdown = document.querySelector('.dropdown');
const btnDrop = document.querySelector('.bloc-top');

let toggleIndex = 0;

btnDrop.addEventListener('click', () => {
    
    if (toggleIndex === 0) {
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        toggleIndex--;
    }

})

/*
! scrollHeight and Height related tricks are underperforming (soon to be depreciated)

* Height transitions are non-optimal
* However, transform: scale() would flatten things and transition may not be as smooth
*/