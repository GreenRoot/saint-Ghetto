const dateTo = new Date("Nov 7, 2022 00:00:01").getTime()
const timerDays = document.getElementById('timerDays');
const timerHours = document.getElementById('timerHours');
const timerMinutes = document.getElementById('timerMinutes');
const timerSeconds = document.getElementById('timerSeconds');
const last = document.getElementById('last');



const timer = setInterval(function() {
    let now = new Date().getTime();
    let t = dateTo - now;

    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        timerDays.innerHTML = days;
        timerHours.innerHTML = ("0" + hours).slice(-2);
        timerMinutes.innerHTML = ("0" + minutes).slice(-2);
        timerSeconds.innerHTML = ("0" + seconds).slice(-2);

        if (days === 2 || days === 3 || days === 4) {
            last.innerHTML = 'дня'
        } else if (days === 1) {
            last.innerHTML = 'день'
        } else if (days === 0) {
            timerDays.innerHTML = '';
            last.innerHTML = '';
        } else {
            last.innerHTML = 'дней'
        }
    } else {
        document.getElementById("timer").innerHTML = "Цены редактируются!";
    }

}, 1000)


console.log(dateTo)
