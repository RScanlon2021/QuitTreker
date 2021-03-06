///////////////////////////////////////////////////////////////////////////////

const quitDate = new Date(2017, 08, 30, 10, 21);
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
    "The risk of??heart disease and stroke??is similar to that of someone who never smoked.",
  ],
];
///////////////////////////////////////////////////////////////////////////////DISPLAY BENEFITS FUNCTION

const displayBenefits = function (benefits) {
  containerMilestones.innerHTML = "";
  milestones.forEach((milestone, i) => {
    const benefit = benefits[i];

    if (now.getTime() >= milestone) {
      const html = `<div class="timeline">
	    <ul>
	      <li>
		<div class="timeline-content">
		  <h1>${benefit[0]}</h1>
		  <p>${benefit[1]}</p>
		</div>
	      </li>
	    </ul>
	  </div>`;

      containerMilestones.insertAdjacentHTML("afterbegin", html);
    }
  });
};
setInterval(displayBenefits(benefits), 1000);

///////////////////////////////////////////////////////////////////////////////

const calcDaysPassed = (date1, date2) =>
  Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tues";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

const month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "Aug";
month[8] = "Sept";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

///////////////////////////////////////////////////////////////////////////////LAST CIGARETTE DATE

const quitYear = quitDate.getFullYear();
const quitMonthString = month[quitDate.getMonth()];
const quitDay = String(quitDate.getDate()).padStart(2, 0);
const quitWeekdayString = weekday[quitDate.getDay()];
const quittingDate = document.getElementById("quit-date");
quittingDate.textContent = `Quit Date: ${quitWeekdayString} ${quitMonthString} ${quitDay}, ${quitYear}`;

///////////////////////////////////////////////////////////////////////////////SMOKE FREE DAYS

const smokeFreeDays = calcDaysPassed(now, quitDate);
const smokeFree = document.getElementById("smoke-free");
smokeFree.textContent = `${smokeFreeDays}`;

///////////////////////////////////////////////////////////////////////////////COST PER PACK
const costPerPack = 14.1;
const calcMoneySaved = (smokeFreeDays * costPerPack).toFixed(2);
const moneySaved = document.getElementById("money-counter");
moneySaved.textContent = `???${calcMoneySaved}`;

///////////////////////////////////////////////////////////////////////////////CIGARETTES PER DAY
const cigarettesPerDay = 20;
const calcCigarettesSaved = smokeFreeDays * cigarettesPerDay;
const CigarettesSaved = document.getElementById("cig-count");
CigarettesSaved.textContent = `${calcCigarettesSaved}`.padEnd(2, 0);

///////////////////////////////////////////////////////////////////////////////LIFE RECLAIMED
const lifeGained = document.getElementById("life-gained");
const cigCost = calcCigarettesSaved * 11;

function convertMinutes(num) {
  years = Math.floor(num / 60 / 24 / 365);
  months = Math.floor(((num / 60 / 24) % 30) % 12);
  days = Math.floor((num / 60) % 24);
  hours = Math.floor((num / 60) % 24);
  mins = Math.round(num % 60);

  if (years >= 1) {
    lifeGained.innerHTML = `${years} yr : ${months} mth`;
  } else if (months >= 1) {
    lifeGained.innerHTML = `${months} mth : ${days} d`;
  } else if (days >= 1) {
    lifeGained.innerHTML = `${days} d : ${hours} hr`;
  } else {
    lifeGained.innerHTML = `${hours} hr : ${mins} min`;
  }
}
setInterval(convertMinutes(cigCost), 1000);
