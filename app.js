///////////////////////////////////////////////////////////////////////////////

const quitDate = new Date(2021, 08, 17, 12, 35);
const now = new Date();
const quitDiff = now - quitDate;
///////////////////////////////////////////////////////////////////////////////MAIN COUNTER

const yearsCounter = document.querySelector("#counter_years");
const monthsCounter = document.querySelector("#counter_months");
const daysCounter = document.querySelector("#counter_days");
const hoursCounter = document.querySelector("#counter_hours");
const minutesCounter = document.querySelector("#counter_minutes");
const secondsCounter = document.querySelector("#counter_seconds");

function updateCountUpTimer() {
  const diff = new Date() - quitDate;

  const years = String(
    Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)
  ).padStart(2, 0);
  const months = String(
    Math.floor(diff / 1000 / 60 / 60 / 24 / 30) % 12
  ).padStart(2, 0);
  const days = String(Math.floor(diff / 1000 / 60 / 60 / 24) % 30).padStart(
    2,
    0
  );
  const hours = String(Math.floor(diff / 1000 / 60 / 60) % 24).padStart(2, 0);
  const mins = String(Math.floor(diff / 1000 / 60) % 60).padStart(2, 0);
  const secs = String(Math.floor(diff / 1000) % 60).padStart(2, 0);

  yearsCounter.innerHTML = years;
  monthsCounter.innerHTML = months;
  daysCounter.innerHTML = days;
  hoursCounter.innerHTML = hours;
  minutesCounter.innerHTML = mins;
  secondsCounter.innerHTML = secs;
}
setInterval(updateCountUpTimer, 1000);

/////////////////////////////////////////////////////////////////////////////////MILESTONE

const containerMilestones = document.querySelector(".timeline");
const quitDateMilli = quitDate.getTime();

const plus_20_Mins = quitDateMilli + 1000 * 60 * 20;
const plus_8_Hours = quitDateMilli + 1000 * 60 * 60 * 8;
const plus_One_Day = quitDateMilli + 1000 * 60 * 60 * 24;
const plus_Two_Days = quitDateMilli + 1000 * 60 * 60 * 24 * 2;
const plus_Three_Days = quitDateMilli + 1000 * 60 * 60 * 24 * 3;
const plus_One_Week = quitDateMilli + 1000 * 60 * 60 * 24 * 7;
const plus_Two_Weeks = quitDateMilli + 1000 * 60 * 60 * 24 * 14;
const plus_One_Month = quitDateMilli + 1000 * 60 * 60 * 24 * 30;
const plus_Three_Months = quitDateMilli + 1000 * 60 * 60 * 24 * 30 * 3;
const plus_Six_Months = quitDateMilli + 1000 * 60 * 60 * 24 * 30 * 6;
const plus_One_Year = quitDateMilli + 1000 * 60 * 60 * 24 * 365;
const plus_Two_Years = quitDateMilli + 1000 * 60 * 60 * 24 * 365 * 2;
const plus_Three_Years = quitDateMilli + 1000 * 60 * 60 * 24 * 365 * 3;
const plus_Five_Years = quitDateMilli + 1000 * 60 * 60 * 24 * 365 * 5;
const plus_Ten_Years = quitDateMilli + 1000 * 60 * 60 * 24 * 365 * 10;
const plus_Fifteen_Years = quitDateMilli + 1000 * 60 * 60 * 24 * 365 * 15;

const milestones = [];
milestones.push(
  plus_20_Mins,
  plus_8_Hours,
  plus_One_Day,
  plus_Two_Days,
  plus_Three_Days,
  plus_One_Week,
  plus_Two_Weeks,
  plus_One_Month,
  plus_Three_Months,
  plus_Six_Months,
  plus_One_Year,
  plus_Two_Years,
  plus_Three_Years,
  plus_Five_Years,
  plus_Ten_Years,
  plus_Fifteen_Years
);
