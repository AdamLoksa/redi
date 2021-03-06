// Toggle menu
const navBtn = Array.from(document.querySelectorAll('.nav-toggle'));
navBtn.forEach(ele => ele.addEventListener('click', (event) => { toggleMenu(event) }));

function toggleMenu(event) {
    event.preventDefault();

    const navIcon = Array.from(document.querySelectorAll('.nav-toggle__icon'));
    const navigation = document.querySelector('.nav');
    const bodyElement = document.querySelector('body');
    const htmlElement = document.querySelector('html');
    const menuElement = document.querySelector('.menu');

    navigation.classList.toggle('nav--open');
    navIcon.forEach(ele => ele.classList.toggle('nav-toggle--open'));

    let bodyWidth = bodyElement.clientWidth;

    setTimeout(function() {
        navigation.classList.toggle('nav--opacity');
        htmlElement.classList.toggle('stop-scrolling');
        menuElement.style.width = `${bodyWidth}px`;
    }, 100);
}


// Hide menu on scroll
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('menu--intro')) return;
    
    let currentScrollPos = window.pageYOffset;
    const introBreakPoint = window.innerHeight * 0.5;

    if (prevScrollpos > currentScrollPos & currentScrollPos > introBreakPoint) {
        menu.style.opacity = '1';
        menu.style.top = '0';
        menu.style.background = 'rgba(20,20,20,0.98)';
    } else if (currentScrollPos < introBreakPoint * 0.25) {
        menu.style.opacity = '0';
    } else if (!document.querySelector('html').classList.contains('stop-scrolling')) {
        menu.style.top = '-5rem';
    }

    prevScrollpos = currentScrollPos;
}


// First page mobile full height
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


// Change form file input name
const formInput = document.querySelector('.form__file');

formInput.addEventListener('change', (event) => {
    const inputName = document.querySelector('.form__file-input').value;

    if (inputName) {
        document.querySelector('.form__file-attach').innerHTML = inputName.split("\\").pop();
    }
})


// Observer for fade-in
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.01
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


// Local storage module
const ctrLocalStorage = (function() {
    // Set data
    function saveData(saveKey, value) {
        localStorage.setItem(saveKey, value);
    }

    // Load data
    function loadData(loadKey) {
        return localStorage.getItem(loadKey);
    }

    // Clear data
    return {
        save: saveData,
        load: loadData
    };
})();

if (ctrLocalStorage.load('first-visit') != 'true') {
    ctrLocalStorage.save('first-visit', 'true');
}


// Cookie bar
const cookieInfo = document.getElementById('cookies');
cookieInfo.addEventListener('click', saveCookies);

function saveCookies(e) {
    if (e.target.classList.contains('btn')) {
        ctrLocalStorage.save('cookies', 'true');
        cookieInfo.style.opacity = '0';

        setTimeout(function() {
        cookieInfo.style.display = 'none';
        }, 250);
    }
}

if (ctrLocalStorage.load('cookies') != 'true') {
    cookieInfo.style.display = 'flex';
    cookieInfo.style.opacity = '1';
}