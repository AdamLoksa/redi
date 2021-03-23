// Toggle menu
const navBtn = Array.from(document.querySelectorAll('.nav-toggle'));
navBtn.forEach(ele => ele.addEventListener('click', (event) => { toggleMenu(event) }));

function toggleMenu(event) {
    event.preventDefault();

    const navIcon = Array.from(document.querySelectorAll('.nav-toggle__icon'));
    const navigation = document.querySelector('.nav');
    const bodyElement = document.querySelector('body');
    const htmlElement = document.querySelector('html');

    navigation.classList.toggle('nav--open');
    navIcon.forEach(ele => ele.classList.toggle('nav-toggle--open'));

    // setTimeout(function() {
    //     navigation.classList.toggle('nav--opacity');
    //     bodyElement.classList.toggle('stop-scrolling');
    // }, 100);

    if (bodyElement.classList.contains('stop-scrolling')) {
        navigation.classList.remove('nav--opacity');
        toggleBodyScroll(false);
    } else {
        setTimeout(function() {
            navigation.classList.add('nav--opacity');
            toggleBodyScroll(true);
        }, 100);
    }
}

function toggleBodyScroll(disable) {
    if (!window.tempScrollTop) {
      window.tempScrollTop = window.pageYOffset; 
      // save the current position in a global variable so I can access again later
    }

    if (disable) {
      document.body.classList.add('stop-scrolling');
      document.body.style.top = `-${window.tempScrollTop}px`;
    } else {
      document.body.classList.remove('stop-scrolling');
      document.body.style.top = `0px`;
      window.scrollTo({top: window.tempScrollTop});
      window.tempScrollTop = 0;
    }
}


// Menu scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    const menu = document.querySelector('.menu');
    const introBreakPoint = window.innerHeight * 0.5;

    if (prevScrollpos > currentScrollPos & currentScrollPos > introBreakPoint) {
        menu.style.opacity = '1';
        menu.style.top = '0';
        menu.style.background = 'rgba(20,20,20,0.98)';
    } else if (currentScrollPos < introBreakPoint * 0.25) {
        menu.style.opacity = '0';
    } else {
        menu.style.top = '-5rem';
    }
    prevScrollpos = currentScrollPos;
}


// Mobile full height
const wh = window.innerHeight;
const pageIntro = document.querySelector('.page-intro');
let firstVisit = 'false';

if (pageIntro) {
    pageIntro.style.setProperty('height', `${wh}px`);
}

window.addEventListener('resize', () => {
    let wh = window.innerHeight;

    if (pageIntro & !firstVisit) {
        firstVisit = 'true';
        pageIntro.style.setProperty('height', `${wh}px`);
    }
});


// Form file attach
const formInput = document.querySelector('.form__file');

formInput.addEventListener('change', (event) => {
    const inputName = document.querySelector('.form__file-input').value;

    if (inputName) {
        document.querySelector('.form__file-attach').innerHTML = inputName.split("\\").pop();
    }
})