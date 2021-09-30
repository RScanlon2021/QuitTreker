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
///////////////////////////////////////////////////////////////////////////////BENEFITS ARRAY

const benefits = [
  ["20 Mins", "Your blood pressure and pulse has started to return to normal."],
  ["8 Hours", "Carbon monoxide levels have returned to a more normal level."],
  [
    "24 Hours",
    "Nicotine is almost completely absent from your blood and you have already reduced your risk of heart attack.",
  ],
  [
    "48 Hours",
    "Previously damaged nerve endings have begun to regrow allowing for improved smell and taste.",
  ],
  [
    "72 Hours",
    "your Lungs have begun to relax and open up making oxygenation inside your lungs much more effective.",
  ],
  [
    "1 Week",
    "CONGRATULATIONS! smokers who make the 1 week mark are 9x more likely to quit successfully.",
  ],
  [
    "2 Weeks",
    "Lung function has increased by as much as 30% making breathing, walking and exercise easier.",
  ],
  [
    "1 Month",
    "Fibres in your lungs have regrown significantly so the they can more effectively remove excess mucus and bacteria resulting in a reduction in sinus congestion and shortness of breath when exercising.",
  ],
  [
    "3 Months",
    "Female smokers have improved their fertility levels as well as reduced the chances of a premature birth.",
  ],
  ["6 Months", "Lungs produce much less mucus and are far less inflamed."],
  [
    "1 Year",
    "your risk of a heart attack is much lower, as is your blood pressure. Coughing and upper respiratory problems begin to improve.",
  ],
  [
    "2 Years",
    "The risk of stroke drops to that of someone who does not smoke.",
  ],
  [
    "3 Years",
    "Your risk of a heart attack has reduced to that of a non-smoker.",
  ],
  [
    "5 Years",
    "The risk of mouth, lung, throat, oesophagus, and bladder cancer is reduced by half.",
  ],
  [
    "10 Years",
    "The risk of lung cancer and bladder cancer is that of a non-smoker as at this point the cells in your lungs have all been replaced by new, undamaged cells.",
  ],
  [
    "15 Years",
    "The risk of heart disease and stroke is similar to that of someone who never smoked.",
  ],
];

