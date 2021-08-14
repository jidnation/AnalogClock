const secondsEl = document.querySelector('.second-hand');
const minutesEl = document.querySelector('.min-hand');
const hoursEl = document.querySelector('.hour-hand');


function setTime() {


    const now = new Date();

    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    var secondsDegree = (seconds / 60) * 360 + 90;
    var minuteDegree = (minutes / 60) * 360 + 90;
    var hoursDegree = (hour / 12) * 360 + 90;

    secondsEl.style.transform = `rotate(${secondsDegree}deg)`;
    minutesEl.style.transform = `rotate(${minuteDegree}deg)`;
    hoursEl.style.transform = `rotate(${hoursDegree}deg)`;



}

setInterval(setTime, 500);