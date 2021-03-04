// Menu component
const navBtn = document.querySelector('.nav-toggle');

navBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const navIcon = document.querySelector('.nav-toggle__icon');
    const navigation = document.querySelector('.nav');
    const bodyElement = document.querySelector('body');

    navigation.classList.toggle('nav--open');
    navIcon.classList.toggle('nav-toggle--open');

    setTimeout(function() {
        bodyElement.classList.toggle('stop-scrolling');
        navigation.classList.toggle('nav--opacity');
    }, 100);
});


// Menu scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.menu').style.top = '0';
        document.querySelector('.menu').style.background = 'rgba(20,20,20,0.98)';
    } else {
        document.querySelector('.menu').style.top = '-5rem';
    }
    prevScrollpos = currentScrollPos;
}

