// ===================
// one timer func 
// ===================


let timer = (sessionDuration, breakDuration, display, ) => {
    let sessionTimer = sessionDuration, sessionMinutes, sessionSeconds;
    let breakTimer = breakDuration, breakMinutes, breakSeconds;
    setInterval( () => {
        sessionMinutes = parseInt(sessionTimer / 60, 10)
        sessionSeconds = parseInt(sessionTimer % 60, 10);

        breakMinutes = parseInt(breakTimer / 60, 10)
        breakSeconds = parseInt(breakTimer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = sessionMinutes + ":" + sessionSeconds;

        if (--sessionTimer < 0) {
            sessionTimer = sessionDuration;
        }
    }, 1000);
}

// let breakTimer = sessionTimer();

document.getElementById('start_stop').addEventListener('click', ()=> {
    let sessionDuration = 60 * 1,
    breakDuration = 60 * 2,
    display = document.querySelector('#time-left');
    timer(sessionDuration, display);
    timer(breakDuration, display);
// start the break timer
// startTimer again
});


// =======================
// alternative timer func
// =======================

// function MyTimer(callback, val) {
//     val = val || 60; 
//     var timer=setInterval(function() { 
//         callback(val);
//         if(val-- <= 0) { 
//             clearInterval(timer); 
//         } 
//     }, 1000);
// }
// new MyTimer(function(val) {
    
//     document.getElementById('start_stop').addEventListener('click', ()=> {
//         var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
//     document.getElementById("time-left").textContent = timerMsg; 
//     })
// });