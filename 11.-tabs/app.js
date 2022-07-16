/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */
'use strict';

//Target the elements' classes and Ids
const btns = document.querySelectorAll('.tab-btn');
//console.log(btns);
const about = document.querySelector('.about');
const article = document.querySelectorAll('.content');
//console.log(article);

//Events Listener

about.addEventListener('click', function (e) {
	//console.log(e.target.dataset.id);
	const id = e.target.dataset.id;
	if (id) {
		//remove active from other buttons
		btns.forEach(function (btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});
		// hide other articles
		article.forEach(function (article) {
			article.classList.remove('active');
		});

    const element = document.getElementById(id);
    element.classList.add('active')
	}
});
