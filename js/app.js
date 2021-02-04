// Menu
// const navBtn = document.querySelector('.nav-toggle');
// const navigation = document.querySelector('.nav');
// const hamburgerIcon = document.querySelector('.hamburger');

// navBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     navigation.classList.toggle('nav--open');
//     hamburgerIcon.classList.toggle('hamburger--open')
// });


// Intro page
const wpIntro = document.querySelectorAll('.wp-intro__animation');
const slideNumber = document.querySelector('.wp-intro__slide--first');
const skipIntro = document.querySelector('.wp-intro__skip__btn');
const introVideo = document.querySelector('.wp-intro__video');
const introProgressBar = document.querySelector('.wp-intro__progress__line');


wpIntro.forEach(elem => elem.addEventListener('animationend', animateIntro));
skipIntro.addEventListener('click', () => console.log('přeskočit intro'));
introVideo.addEventListener('timeupdate', handleProgress);

function animateIntro(event) {
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
};

function handleProgress() {
    // const percent = (introVideo.currentTime / introVideo.duration) * 140;
    // introProgressBar.style.width = `${percent}%`;
    introProgressBar.style.width = `100%`;
    // console.log(introProgressBar);
}

// function progress(){         
//     introProgressBar.animate({ width: "100%" }, 12000);
//  };

//  progress();
    
