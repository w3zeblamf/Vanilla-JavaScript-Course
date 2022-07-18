/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

const months = [
	'January', // i = [0]
	'February', // i = [1]
	'March', // i = [2]
	'April', // i = [3]
	'May', // i = [4]
	'June', // i = [5]
	'July', // i = [6]
	'August', // i = [7]
	'September', // i = [8]
	'October', // i = [9]
	'November', // i = [10]
	'December', // i = [11]
];

const weekdays = [
	'Sunday', // [0]
	'Monday', // [1]
	'Tuesday', // [2]
	'Wednesday', // [3]
	'Thursday', // [4]
	'Friday', // [5]
	'Saturday', // [6]
];

/*Remember that the months inside an array are cero based, it means that we count from zero [0] to eleven [11]: 
Example: 
May is moths number four [4] not five [5] inside the array
July is moths number four [6] and so on...

For weekdays is the same functionality as explained before
*/

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
//console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate()

console.log(tempDate);
console.log(tempYear);
console.log(tempMonth);
console.log(tempDay)

//let tempWeekDay = tempDate.getDay()
//console.log(tempWeekDay)


let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//let futureDate = new Date(2022, 6, 22, 19, 30, 0);
// 'new Date()' use the 24 hours format
//console.log(futureDate);

//Get current year
const year = futureDate.getFullYear();
//console.log(year);

//Get current hour
const hours = futureDate.getHours();

//Get current minutes
const minutes = futureDate.getMinutes();

//Get current month
let month = futureDate.getMonth();
month = months[month];
//console.log(months[month]);

//Get current date
const date = futureDate.getDate();
//console.log(date);

//Get current day
const weekday = weekdays[futureDate.getDay()];
//console.log(weekday);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in milliseconds (ms)
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime() {
	const today = new Date().getTime();
	//console.log(today);
	const t = futureTime - today;

	//console.log(t);
	// 1s = 1000ms
	// 1m = 60s
	// 1hr = 60mins
	// 1d = 24hr

	//values in ms (How many milliseconds are in one day)

	const oneDay = 24 * 60 * 60 * 1000;
	//console.log(oneDay);

	//values in hrs (How many milliseconds are in one hour)

	const oneHour = 60 * 60 * 1000;
	//console.log(oneHour);

	//values in min (How many milliseconds are in one minute)

	const oneMinute = 60 * 1000;
	//console.log(oneMinute);

	//calculate all values

	let days = t / oneDay;

	days = Math.floor(days);
	//console.log(days);

	let hours = Math.floor((t % oneDay) / oneHour);
	//console.log(hours);

	let minutes = Math.floor((t % oneHour) / oneMinute);
	//console.log(minutes);

	let seconds = Math.floor((t % oneMinute) / 1000);
	//console.log(seconds);

	// set values array;

	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
		return item;
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index]);
	});

	if (t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
	}
}

// countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
