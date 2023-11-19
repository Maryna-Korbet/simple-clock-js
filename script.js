const arrDays = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const elements = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),

  digital: document.querySelector(".digital-clock"),

  hours: document.querySelector(".clock-hours__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  seconds: document.querySelector(".clock-seconds__arrow"),
};

setInterval(() => {
  const currentDate = new Date();
  const day = arrDays[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = namesOfMonth[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const time = currentDate.toLocaleTimeString("uk");

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const secDeg = (360 / 60) * seconds;
  const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
  console.log(secDeg);

  elements.day.textContent = day;
  elements.date.textContent = date;
  elements.month.textContent = month;
  elements.year.textContent = year;
  elements.digital.textContent = time;

  elements.seconds.style.transform = `rotate(${secDeg}deg)`;
  elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);