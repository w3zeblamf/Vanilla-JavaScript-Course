/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

/* EventListener */

//Passing a callback function (an anonymous function)
btn.addEventListener('click', function () {
  //The logic of this function: Each and every time I´m going to click on a button, I'll change the background color on the document body.

  //Since we know that the body is the property on the document object,

  console.log(document.body);
});

//console.log(document.body);