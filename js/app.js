// WP video introduction component
const websiteIntro = (function() {
    const wpIntro = document.querySelector('.wp-intro');
    const wpIntroAnimation = document.querySelectorAll('.wp-intro__animation');
    const slideNumber = document.querySelector('.wp-intro__slide--first');
    const skipIntro = document.querySelector('.wp-intro__skip__btn');
    const introVideo = document.querySelector('.wp-intro__video');
    const introProgressBar = document.querySelector('.wp-intro__progress__line');
    const bodyElement = document.querySelector('body');
    
    wpIntroAnimation.forEach(elem => elem.addEventListener('animationend', animateIntro));
    skipIntro.addEventListener('click', hideIntro);
    introVideo.addEventListener('timeupdate', handleProgress);
    
    function insertIntro() {
        wpIntro.classList.add('wp-intro--show');
        bodyElement.classList.add('stop-scrolling');
        bodyElement.classList.add('wp-intro--fade');
    }

    function hideIntro() {
        bodyElement.style = 'opacity: 0';
    
        setTimeout(function() {
            wpIntro.classList.remove('wp-intro--show');
            bodyElement.classList.remove('stop-scrolling');
            bodyElement.style = 'opacity: 1';
        }, 500);
    }

    function animateIntro(event) {
        let currentSlideNumber = slideNumber.innerHTML;
        currentSlideNumber++;
    
        if (currentSlideNumber <= 4) {
            slideNumber.innerHTML = currentSlideNumber;
        } else {
            setTimeout(function() {
                hideIntro();
            }, 500);
        }
    
        if (currentSlideNumber == 4) {
            setTimeout(function() {
                slideNumber.classList.remove('wp-intro__slide--first');
            }, 500);
        }
    };
    
    function handleProgress() {
        introProgressBar.style = `width: 100%`;
    }

    return {
        init: insertIntro
    };
})(); 

// Session storage to be added
let firstVisit = 1;

if (firstVisit === 0) {
    websiteIntro.init();
}



// Menu component
const navBtn = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

navBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigation.classList.toggle('nav--open');
    hamburgerIcon.classList.toggle('hamburger--open')
});