const readingButton1 = document.getElementById('readMore1');

const dotsTeasing = document.getElementById('dots1');

const hiddenText = document.getElementById('more1');

let i = 0;

function toRead () {

    if(!i){
      hiddenText.style.display =  "inline";
      dotsTeasing.style.display = "none";
      readingButton1.innerHTML = "FOLDER";

      return  i = 1;
    } else {
        hiddenText.style.display =  "none";
        dotsTeasing.style.display = "inline";
        readingButton1.innerHTML = "READ MORE";

        return i = 0;
             }
}

readingButton1.addEventListener("click", toRead)