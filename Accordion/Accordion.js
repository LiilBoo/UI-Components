const toggles = document.querySelectorAll('.toggle');

let contentDiv = document.querySelectorAll('.content');

let icons = document.querySelectorAll('.icon');

console.log(toggles,contentDiv,icons);



for(let i = 0; i < toggles.length; i++) {

toggles[i].addEventListener('click', () => {

    
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
        contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
        toggles[i].style.color = "#0084e9";
        icons[i].classList.remove('fa-plus');
        icons[i].classList.add('fa-minus');
    } else {
        contentDiv[i].style.height = "0px";
        toggles[i].style.color = "#111130";
        icons[i].classList.remove('fa-minus');
        icons[i].classList.add('fa-plus')
    } //*End of 1st if/else

    for(let j = 0; j < contentDiv.length; j++) {
    
        if (j!==i){
            contentDiv[j].style.height = "0px";
            toggles[j].style.color = "#111130";
            icons[j].classList.remove('fa-minus');
            icons[j].classList.add('fa-plus')
        }
        //*Not fully understood
        //*Even tho it's just a reverse function
    
    }

});


} //*End of TogglesLoop


