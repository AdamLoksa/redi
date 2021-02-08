// Menu
const navBtn = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');

navBtn.addEventListener('click', (event) => {
    event.preventDefault();
    navigation.classList.toggle('nav--open');
    hamburgerIcon.classList.toggle('hamburger--open')
});



// Intro page
const wpIntro = document.querySelector('.wp-intro');
const wpIntroAnimation = document.querySelectorAll('.wp-intro__animation');
const slideNumber = document.querySelector('.wp-intro__slide--first');
const skipIntro = document.querySelector('.wp-intro__skip__btn');
const introVideo = document.querySelector('.wp-intro__video');
const introProgressBar = document.querySelector('.wp-intro__progress__line');


wpIntroAnimation.forEach(elem => elem.addEventListener('animationend', animateIntro));
skipIntro.addEventListener('click', hideIntro);
introVideo.addEventListener('timeupdate', handleProgress);

function animateIntro(event) {
    console.log(event);

    let currentSlideNumber = slideNumber.innerHTML;
    currentSlideNumber++;

    if (currentSlideNumber <= 4) {
        slideNumber.innerHTML = currentSlideNumber;
    }

    if (currentSlideNumber == 4) {
        setTimeout(function() {
            slideNumber.classList.remove('wp-intro__slide--first');
        }, 500);
    }

    if (currentSlideNumber > 4) {
        setTimeout(function() {
            hideIntro();
        }, 500);
    }
};

function handleProgress() {
    introProgressBar.style = `width: 100%`;
}


function insertIntro() {
    wpIntro.style = `opacity: 1; display: block`;
    document.querySelector('body').classList.add('stop-scrolling');
}

insertIntro();

function hideIntro() {
    console.log('přeskočit intro');
    document.querySelector('body').style = 'opacity: 0';

    setTimeout(function() {
        wpIntro.style = 'display: none;';
        document.querySelector('body').classList.remove('stop-scrolling');
        document.querySelector('body').style = 'opacity: 1';
    }, 500);
}


    
