const body = document.querySelector('body');
const bntHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeelmnts = document.querySelectorAll('.has-fade');

bntHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) { //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeelmnts.forEach(function (element) {
            element.classList.add('has-fade');
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeelmnts.forEach(function (element) {
            element.classList.remove('has-fade');
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
})