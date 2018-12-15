let minutes = 0;
let seconds = 0;

sessionMinutes = 1;
breakMinutes = 1

let sessionDuration = 60 * sessionMinutes,
    breakDuration = 60 * breakMinutes;

breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds;
document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds;
document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML

document.getElementById('session-increment').addEventListener('click', () => {
    if (sessionMinutes < 60) {
    sessionMinutes++
    sessionDuration = 60 * sessionMinutes;
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds
    document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML
    } else {
        return false
        }
});

document.getElementById('break-increment').addEventListener('click', () => {
    if (breakMinutes < 60) {
    breakMinutes++
    breakDuration = 60 * breakMinutes;
    breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds
    } else {
        return false
        }
});

document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionMinutes > 0) {
    sessionMinutes--
    sessionDuration = 60 * sessionMinutes;
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + seconds
    document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML
    } else {
        return false
    }
});

document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakMinutes > 0) {
    breakMinutes--
    breakDuration = 60 * breakMinutes;
    breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + seconds
    } else {
        return false
    }
});

let pomodoroClock = (duration, display) => {
    let timer = duration, minutes, seconds;
    let interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        --timer

        if (timer === -1 && duration === sessionDuration) {
            timer = duration = breakDuration;
            document.getElementById('timer-label').innerHTML = 'Break';   
            // play audio here     
        } else if (timer === -1 && duration === breakDuration) {
            timer = duration = sessionDuration;
            document.getElementById('timer-label').innerHTML = 'Session';
        }

    }, 1000);


    console.log(timer)
    console.log(duration)
//     if (--timer < duration) {
//     document.getElementById('start_stop').addEventListener('click', () => {
//         clearInterval(interval)
//     })
// }

    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(interval);
        document.getElementById('time-left').innerHTML = sessionMinutes + ':' + 0+0;
        timer = duration = sessionDuration;
        document.getElementById('timer-label').innerHTML = 'Session';
    });
};

// if (timer < duration) {
//     document.getElementById('start_stop').addEventListener('click', () => {
//         clearInterval(interval)
//     })
// }

document.getElementById('start_stop').addEventListener('click', () => {    
    display = document.querySelector('#time-left');
    pomodoroClock(sessionDuration, display);
});


// ===========
// TODOS:
// make stop -> resume Work
// implement audio 
// refactor everything! (with a classes maybe, use minutes only once)