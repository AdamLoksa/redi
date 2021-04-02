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
        // playVideo();
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


// Local storage
if (localStorage.getItem('first-visit')!= 'true') {
    websiteIntro.init();
}


// Observer for landing page text animation
const titleTransitions = document.querySelector('.text-center');
const transitionOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

const changeTitleText = new IntersectionObserver(function(entry, changeTitleText) {
    entry.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log('spustil som sa');

            const pageTitleTransitions = document.querySelectorAll('.page-title__transition');
            const timeOut = 500;

            pageTitleTransitions.forEach(transition => {
                if (transition.classList.contains('page-title__transition--fade')) {
                    setTimeout(function() {
                        transition.classList.remove('page-title__transition--fade')
                    }, timeOut);
                } else {
                    transition.classList.add('page-title__transition--fade')
                    
                    setTimeout(function() {
                        transition.style = 'display: none';
                    }, timeOut);
                }
            })

            changeTitleText.unobserve(entry.target);
        }
    })
}, transitionOptions);

changeTitleText.observe(titleTransitions);