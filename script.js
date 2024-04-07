const countDown =() => {
//#1
const deadLine = new Date('31 december 2025 00:00:00' )
const now = new Date ()
const gap = deadLine - now
console.log(gap);
//#2

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

//#3
const textDay = Math.floor(gap / day)
const textHour = Math.floor((gap % day) / hour)
const textMinute = Math.floor((gap % hour) / minute)
const textSecond = Math.floor((gap % minute) / second)

//#4

document.querySelector('.day').innerText= textDay
document.querySelector('.hour').innerText= textHour
document.querySelector('.minute').innerText= textMinute
document.querySelector('.second').innerText= textSecond



document.querySelector(".day").innerText =
    textDay < 10 ? "0" + textDay : textDay;
  document.querySelector(".hour").innerText =
    textHour < 10 ? "0" + textHour : textHour;
  document.querySelector(".minute").innerText =
    textMinuite < 10 ? "0" + textMinuite : textMinuite;
  document.querySelector(".second").innerText =
    textSecond < 10 ? "0" + textSecond : textSecond;


}

setInterval(countDown,1000)


countDown()
