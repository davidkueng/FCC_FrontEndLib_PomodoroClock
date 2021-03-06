let sessionMinutes = 25,
    breakMinutes = 5,
    displaySeconds = 0;

let sessionDuration = 0.2 * sessionMinutes,
    breakDuration = 0.4 * breakMinutes;

displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;

document.getElementById('session-length').innerHTML = sessionMinutes;
document.getElementById('break-length').innerHTML = breakMinutes;
document.getElementById('time-left').innerHTML = sessionMinutes + ':' + displaySeconds;

document.getElementById('session-increment').addEventListener('click', () => {
    if (sessionMinutes < 60) {
    sessionMinutes++
    sessionDuration = 60 * sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes
    sessionMinutes < 10 ? document.getElementById('time-left').innerHTML = '0' + sessionMinutes + ':' + displaySeconds
    : document.getElementById('time-left').innerHTML = sessionMinutes + ':' + displaySeconds;
    } else {
        return false
        }
});

document.getElementById('session-decrement').addEventListener('click', () => {
    if (sessionMinutes > 1) {
    sessionMinutes--
    sessionDuration = 60 * sessionMinutes;
    document.getElementById('session-length').innerHTML = sessionMinutes
    sessionMinutes < 10 ? document.getElementById('time-left').innerHTML = '0' + sessionMinutes + ':' + displaySeconds
    : document.getElementById('time-left').innerHTML = sessionMinutes + ':' + displaySeconds;
    } else {
        return false
    }
});

document.getElementById('break-increment').addEventListener('click', () => {
    if (breakMinutes < 60) {
    breakMinutes++
    breakDuration = 60 * breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes
    } else {
        return false
        }
});

document.getElementById('break-decrement').addEventListener('click', () => {
    if (breakMinutes > 1) {
    breakMinutes--
    breakDuration = 60 * breakMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes
    } else {
        return false
    }
});

function setIntervalImmediately(func, interval) {
    func();
    return setInterval(func, interval);
  }

let pomodoroClock = (duration, display) => {

    timer = duration

    interval = setIntervalImmediately( _ => {
    
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        timer--

        if (timer === -2 && duration === sessionDuration) {
            clearInterval(interval) 
            document.getElementById('timer-label').innerHTML = 'Break';           
            pomodoroClock(breakDuration, document.querySelector('#time-left'))
            // document.getElementById('beep').play();
        } else if (timer === -2 && duration === breakDuration) {
            // duration = sessionDuration;   
            // timer = sessionDuration;     
            clearInterval(interval) 
            document.getElementById('timer-label').innerHTML = 'Session';           
            pomodoroClock(sessionDuration, document.querySelector('#time-left'))                           
            // document.getElementById('beep').play();
        } else if (timer === -2 && duration === stoppedTime) {
            if (document.getElementById('timer-label').innerHTML === 'Session') {
                // duration = timer = breakDuration;                  
                clearInterval(interval) 
                document.getElementById('timer-label').innerHTML = 'Break';           
                pomodoroClock(breakDuration, document.querySelector('#time-left'))                            
                // document.getElementById('beep').play();
            } else if (document.getElementById('timer-label').innerHTML === 'Break') {
                // duration = timer = sessionDuration;            
                clearInterval(interval) 
                document.getElementById('timer-label').innerHTML = 'Session';           
                pomodoroClock(sessionDuration, document.querySelector('#time-left'))             
                // document.getElementById('beep').play();
            }
        }    
    }, 1000);    
};

document.getElementById('start_stop').addEventListener('click', () => {   
    display = document.querySelector('#time-left') 
    if (display.textContent === '0' + sessionMinutes + ':' + 0 + 0 || display.textContent === sessionMinutes + ':' + 0 + 0) {
    pomodoroClock(sessionDuration, display)
    started = true
    } else if (started) {
        clearInterval(this.interval)
        started = false
        stoppedTime = timer
    } else {
        pomodoroClock(stoppedTime, display)
        started = true
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(this.interval);
    sessionMinutes = 25;
    breakMinutes = 5;
    document.getElementById('time-left').innerHTML = sessionMinutes + ':' + 0+0;
    document.getElementById('timer-label').innerHTML = 'Session'  
    document.getElementById('session-length').innerHTML = sessionMinutes;
    document.getElementById('break-length').innerHTML = breakMinutes;
    timer = duration = sessionDuration = 1500;
    breakDuration = 300;
    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;     
});


// ===========
// TODOS:
// refactor everything! (with a classes / switch statemens maybe)
// make inc/dec unclickable if timer is running
// fix user stories 12-15