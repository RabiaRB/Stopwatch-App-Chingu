document.querySelector("#start").addEventListener('click', startTime);
document.querySelector("#stop").addEventListener('click', stopTime);
document.querySelector("#reset").addEventListener('click', resetTime);
// document.querySelector("#lap").addEventListener('click', lapTime);

let hour = 0;
let min = 0;
let sec = 0;
let secSmall = 0;

let timer = false;

function startTime() {
  alert('IM ALIVEEEEE');
  timer = true;
  playStopWatch();
}

function stopTime() {
  timer = false;
}

function resetTime() {
  alert('ITS RESET')
  timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    secSmall = 0;
  displayTime();
  
}

function playStopWatch() {
  if (timer == true) {
    secSmall += 1;

    if (secSmall == 100) {
      sec += 1;
      secSmall = 0;

      if (sec == 60) {
        min++;
        sec = 0;
        secSmall = 0;


        if (min == 60) {
          hour++;
          min = 0;
          sec = 0;
          secSmall = 0;

      }
      }
    }

    displayTime();
    setTimeout("playStopWatch()", 10);


      // if (sec > 60) {
      //   min++;

      // }
    
  }
  
}

function displayTime() {
  let hourString = hour;
  let minString = min;
  let secString = sec;
  let secSmallString = secSmall;

  if (hourString < 10) 
    hourString = "0" + hourString;
  }
   if (minString < 10) {
     minString = "0" + minString;
  
   }
   if (secString < 10) {
    secString = "0" + secString;
  
   }
  if (secSmallString < 10) {
    secString = "0" + secSmallString;
  
  }
  document.querySelector("#hourTime").innerHTML = hourString;
  document.querySelector("#minTime").innerHTML = minString;
  document.querySelector("#secTime").innerHTML = secString;
  document.querySelector("#secSmallTime").innerHTML = secSmallString;
  
}