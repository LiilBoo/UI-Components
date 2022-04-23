
window.addEventListener("load", function() {
    this.setTimeout(
        function open(event) {
            popupTile.style.display = "block";
        },1000
    )
});


const closeButton = document.querySelector('#close');

const popupTile = document.querySelector('.popup');

closeButton.addEventListener("click", function() {
    popupTile.style.display = "none";
});