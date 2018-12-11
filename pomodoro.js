let minutes = 0;
let seconds = 0;

sessionMinutes = 2;
breakMinutes = 1

breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds;
document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds;
document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML

document.getElementById('session-increment').addEventListener('click', () => {
    if (sessionMinutes < 60) {
    sessionMinutes++
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds
    } else {
        return false
        }
});

document.getElementById('break-increment').addEventListener('click', () => {
    if (breakMinutes < 60) {
    breakMinutes++
    breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds
    } else {
        return false
        }
});

document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionMinutes > 0) {
    sessionMinutes--
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds
    } else {
        return false
    }
});

document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakMinutes > 0) {
    breakMinutes--
    breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds
    } else {
        return false
    }
});

let clock = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

document.getElementById('start_stop').addEventListener('click', ()=> {
   
    let sessionDuration = 60 * sessionMinutes,
    breakDuration = 60 * breakMinutes;

    display = document.querySelector('#time-left');   

    console.log('time')
     
    clock(sessionDuration, display); // does not start because of interval 1000
    clock(breakDuration, display);  
   
// start the break timer
// startTimer again
});


// pause === use clearInterval ?


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

// ===========
// TODOS:
// make stop -> resume Work
// make reset work
// refactor click handler (with a class maybe)