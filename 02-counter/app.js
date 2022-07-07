/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

// Set initial count
let count = 0;

//Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//console.log(btns);
//NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]

btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		// e = event Object

		const styles = e.currentTarget.classList;
		//console.log(styles);
		//console.log(e.currentTarget); // to check with button I´m pressing
		//console.log(e.currentTarget.classList); // Show all the classes the element has

		//statement to activate the counter clicking buttons
		if (styles.contains('decrease')) {
			count--;
		} else if (styles.contains('increase')) {
			count++;
		} else {
			count = 0;
		}

		//statement to change the counter text color when clicking on buttons
		if (count > 0) {
			value.style.color = 'green';
		}
		if (count < 0) {
			value.style.color = 'red';
		} if (count === 0) {
			value.style.color = '#222'
		}
		value.textContent = count;
	});
	//console.log(btn)
});
//MDN Web Docs' references
//=========================

//https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
