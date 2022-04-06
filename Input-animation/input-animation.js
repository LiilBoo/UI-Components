

const input = document.querySelector('.inp-anim');

const validation = document.querySelector('.inp-wrap span');

input.addEventListener("input", (e) => {

    if(e.target.value !== ""){
        e.target.parentNode.classList.add("active-input")
    } else if(e.target.value === ""){
        e.target.parentNode.classList.remove("active-input")
    }

    if(e.target.value.includes("$")){
        input.classList.add("erreur");
        validation.classList.add("visible")
        console.log("Erreur");
    } else {
        input.classList.remove("erreur");
        validation.classList.remove("visible");
    }

});

