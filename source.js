

// Start with an initial value of 20 seconds


// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timerInterval = null;
let timeVar;
let time = -1  ;
//lenght of the circle 
const FULL_DASH_ARRAY = 283;


function updateTime(timeUpdate){ 

  document.title = "Tempo: " + formatTimeLeft(timeUpdate); 
  document.getElementById("time_label").innerHTML = formatTimeLeft(timeUpdate); 


}


function start(timeLeft){
  if(timePassed == time){ 
    clearInterval(timeVar);
    return 0; 
  }   
  timePassed = timePassed += 1;
  timeLeft = time - timePassed;
  updateTime(timeLeft);
  setCircleDasharray(timeLeft);   
  if(timeLeft != time){
    document.getElementById("reset").style.display="block";
  }
       
}

function stopTimer(){ 
  clearInterval(timeVar);
  trocarBotao(0); 
 
  document.getElementsByClassName("base-timer__path-remaining")[0].style.transition = "0.2s linear all";
}


function setTime(timeLimit){ 
  time = timeLimit;
  timePassed = 0;
  document.getElementById("time_label").innerHTML = formatTimeLeft(time);
  document.title = "Tempo: " + formatTimeLeft(time); 
  stopTimer(); 
  reset()

}
setTime(1500);
function timer(timeLeft, parar = 0){  
    
    if(!parar){
      if(time == -1){ 
        time = timeLeft;
      } 
      document.getElementsByClassName("base-timer__path-remaining")[0].style.transition = "1s linear all";
       start(time,timeLeft) ;
      timeVar = setInterval(()=> {start(time,timeLeft)}, 1000);
      trocarBotao(1);  
    }else{   
       stopTimer(); 
    }
}


function formatTimeLeft(timeToFormat) {
    const minutes = Math.floor(timeToFormat / 60);
    // Seconds are the remainder of the timeToFormat divided by 60 (modulus operator)
    let seconds = timeToFormat % 60;
    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    // The output in MM:SS format
    return `${minutes}:${seconds}`;
  }








  // Divides time left by the defined time limit.
function calculateTimeFraction(timeLeft) {
    return timeLeft / time;
  }
      
  // Update the dasharray value as time passes, starting with 283
  function setCircleDasharray(timeLeft) {
    const circleDasharray = `${(
      calculateTimeFraction(timeLeft,time) * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

  
  //Botões


  function trocarBotao(trocar){ 
    if(trocar){     
        document.getElementById("play").style.display="none";
        document.getElementById("stop").style.display="block";
    }else{ 
        document.getElementById("stop").style.display="none";
        document.getElementById("play").style.display="block";
    }
}


function reset(){ 
  // let timeSegundos = document.getElementById("time_label").innerHTML.split(":")[1]; 
  // let timeMinutos = document.getElementById("time_label").innerHTML.split(":")[0]; 
  updateTime(time);
  document.getElementById("reset").style.display = "none";
  timePassed = 0; 
  setCircleDasharray(time); 
  stopTimer(); 

  }
