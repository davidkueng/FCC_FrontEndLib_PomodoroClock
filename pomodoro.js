let sessionMinutes = 2,
    breakMinutes = 1,
    displaySeconds = 0;

let sessionDuration = 3 * sessionMinutes,
    breakDuration = 2 * breakMinutes;

breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;

document.getElementById('session-length').innerHTML = sessionMinutes + ':' + displaySeconds;
document.getElementById('break-length').innerHTML = breakMinutes + ':' + displaySeconds;
document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML

document.getElementById('session-increment').addEventListener('click', () => {
    if (sessionMinutes < 60) {
    sessionMinutes++
    sessionDuration = 60 * sessionMinutes;
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + displaySeconds
    document.getElementById('time-left').innerHTML = document.getElementById('session-length').innerHTML
    } else {
        return false
        }
});

document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionMinutes > 0) {
    sessionMinutes--
    sessionDuration = 60 * sessionMinutes;
    sessionMinutes = sessionMinutes < 10 ? "0" + sessionMinutes : sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes + ':' + displaySeconds
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
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + displaySeconds
    } else {
        return false
        }
});

document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakMinutes > 0) {
    breakMinutes--
    breakDuration = 60 * breakMinutes;
    breakMinutes = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes + ':' + displaySeconds
    } else {
        return false
    }
});

let pomodoroClock = (duration, display) => {

    timer = duration
    
    interval = setInterval(() => {   
    
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        --timer

        if (timer === -1 && duration === sessionDuration) {
            duration = timer = breakDuration;
            document.getElementById('timer-label').innerHTML = 'Break';   
            // document.getElementById('beep').play();
        } else if (timer === -1 && duration === breakDuration) {
            duration = timer = sessionDuration;
            document.getElementById('timer-label').innerHTML = 'Session';
        } else if (timer === -1 && duration === stoppedTime) {
            console.log('changeTimer')
            if (document.getElementById('timer-label').innerHTML === 'Session') {
                duration = timer = breakDuration;
                document.getElementById('timer-label').innerHTML = 'Break'; 
            } else if (document.getElementById('timer-label').innerHTML === 'Break') {
                duration = timer = sessionDuration;
                document.getElementById('timer-label').innerHTML = 'Session';
            }
            // check the timerlabel to change
        }
    }, 1000);
};

document.getElementById('start_stop').addEventListener('click', () => {   
    display = document.querySelector('#time-left') 
    if (display.textContent === sessionMinutes + ':' + 0 + 0) { 
    pomodoroClock(sessionDuration, display)
    started = true
    } else if (started) {
        clearInterval(interval)
        document.getElementById('beep').pause();
        started = false
        stoppedTime = timer
        console.log(stoppedTime)
    } else {
        pomodoroClock(stoppedTime, display)
        started = true
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);
    document.getElementById('time-left').innerHTML = sessionMinutes + ':' + 0+0;
    timer = duration = sessionDuration;
    document.getElementById('beep').pause();
    document.getElementById('timer-label').innerHTML = 'Session'
});







// ===========
// TODOS:
// refactor everything! (with a classes maybe)
// make inc/dec unclickable if timer is running
// pause/resume breaks the break/session toggle