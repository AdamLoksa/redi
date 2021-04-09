// WP video introduction component
const websiteIntro = (function() {
    const wpIntro = document.querySelector('.wp-intro');
    const wpIntroAnimation = document.querySelectorAll('.wp-intro__animation');
    const slideNumber = document.querySelector('.wp-intro__slide--first');
    const video = document.querySelector('#bgvid');
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

    introVideo.oncanplay = () => {
        playVideo();
    }

    function playVideo() {
        wpIntroAnimation.forEach(animation => {
            animation.style = 'animation-name: text-fade;';
        })
        
        slideNumber.style = 'animation-name: text-fade;';
    }

    function hideIntro() {
        bodyElement.style = 'opacity: 0';

        setTimeout(function() {
            wpIntro.classList.remove('wp-intro--show');
            bodyElement.classList.remove('stop-scrolling');
            bodyElement.style = 'opacity: 1';
            pageTitleTextAnimation();
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


// Local storage
if (localStorage.getItem('first-visit')!= 'true') {
    websiteIntro.init();
} else {
    pageTitleTextAnimation();
}

function pageTitleTextAnimation() {
    // Home page title animation
    const pageTitleAnimation = document.querySelectorAll('.page-title__animation--text');
    const pageTitleAnimationDot = document.querySelectorAll('.page-title__animation--dot');

    pageTitleAnimation.forEach(element => {
        element.style = 'animation-name: title-fade;';
        element.addEventListener('animationend', () => {
            element.style = 'display: none';
        })
    })   

    pageTitleAnimationDot.forEach(element => {
        element.style = 'animation-name: dot-fade;';
    })
}








