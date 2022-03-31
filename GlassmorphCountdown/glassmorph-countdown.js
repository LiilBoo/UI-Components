
const DAY_BOX = document.querySelector('#day-box');

const HOUR_BOX = document.querySelector('#hr-box');

const MINUTES_BOX = document.querySelector('#min-box');

const SECONDS_BOX = document.querySelector('#sec-box');



let endDate = new Date(2022,5,1,20,30);

let endTime = endDate.getTime();


const BIG_TITLE = document.querySelector('.heading');



function addZeroes(num) {

    let magicZero = num < 10 ? `0${num}` : num;
     return magicZero;
}


 function countdown() {
      
     
 
     let todayDate = new Date();
    
     let todayTime = todayDate.getTime();
 
     let remainingTime = endTime - todayTime;
 
     
     let oneMin = 60 * 1000;
     
     let oneHour = 60 * oneMin;
     
     let oneDay = 24 * oneHour;
 
     
     if(endTime < todayTime){
 
         
         clearInterval();
 
         BIG_TITLE.innerHTML = '<h1>Countdown has expired! Set the new endDate in JS file</h1>';
     } else { 
         let daysLeft = Math.floor(remainingTime / oneDay);
         
         let hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
 
         let minutesLeft = Math.floor( (remainingTime % oneHour) / oneMin)
 
         let secondsLeft = Math.floor((remainingTime % oneMin) / 1000)
         
        
 
         
         DAY_BOX.textContent = addZeroes(daysLeft);
 
         HOUR_BOX.textContent = addZeroes(hoursLeft);
 
         MINUTES_BOX.textContent = addZeroes(minutesLeft);
 
         SECONDS_BOX.textContent = addZeroes(secondsLeft);
 
 
 
 
 
     }
 
 }
 
 let magicZero = setInterval(countdown,1000);
 countdown();