

const MY_TEXT = document.querySelector('#my-text');

const P_CHANGE = document.querySelector('#count-result');


MY_TEXT.addEventListener("input", () => {
    
    let count = (MY_TEXT.value).length;
    

    P_CHANGE.textContent = `Total characters: ${count}`;
});