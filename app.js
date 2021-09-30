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
