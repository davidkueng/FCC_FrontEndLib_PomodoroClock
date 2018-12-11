function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval( () => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.getElementById('start_stop').addEventListener('click', ()=> {
    let duration = 60 * 1,
    display = document.querySelector('#time-left');
startTimer(duration, display);
});