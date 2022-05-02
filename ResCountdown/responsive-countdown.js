const dayBox = document.getElementById('day-box');

const hourBox = document.getElementById('hr-box');

const minutesBox = document.getElementById('min-box');

const secondsBox = document.getElementById('sec-box');

const bigTitle = document.querySelector('.countdown');





let endDate = new Date(2022,11,31,16,30);


let endTime = endDate.getTime();



function addZeroes(num) {

   let magicZero = num < 10 ? `0${num}` : num;
    return magicZero;
}


function countdown() {
     
    const bigTitle = document.querySelector('.countdown');

    let todayDate = new Date();
    
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;

    
    let oneMin = 60 * 1000;
    
    let oneHour = 60 * oneMin;
   
    let oneDay = 24 * oneHour;

    
    if(endTime < todayTime){

        
        clearInterval();

        bigTitle.innerHTML = '<h1>Countdown has expired! Set the new endDate in JS file</h1>';
    } else { 
        let daysLeft = Math.floor(remainingTime / oneDay);
        
        let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);

        let minutesLeft = Math.floor( (remainingTime % oneHour) / oneMin);

        let secondsLeft = Math.floor((remainingTime % oneMin) / 1000);
        
    
        
        dayBox.textContent = addZeroes(daysLeft);

        hourBox.textContent = addZeroes(hoursLeft);

        minutesBox.textContent = addZeroes(minutesLeft);

        secondsBox.textContent = addZeroes(secondsLeft);





    };

};

let magicZero = setInterval(countdown,1000);
countdown();