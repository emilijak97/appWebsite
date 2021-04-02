// burger animation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-links li')

burger.addEventListener('click', function() {
    nav.classList.toggle('nav-links-active');

    navLink.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    burger.classList.toggle('toggle');
});

let slidePosition = 0;
const slides = document.getElementsByClassName('beyond-sub');
const totalSlides = slides.length;

document.getElementById('next-btn').addEventListener('click', function() {
    moveToNextSlide();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let i = 0; i < totalSlides; i++) {
        console.log(slides[i]);
        slides[i].classList.remove('visible');
        //slides[i].classList.add('hidden');
    }

    slides[slidePosition].classList.add('visible');
}

function moveToNextSlide() {
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

// animate on scroll
var element = document.querySelector(".beyond-recipe-img");
var elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);

// check if element is in view, returns true or false
function inView() {
    // get window height
    const windowHeight = window.innerHeight;
    // get number of px that the document is scrolled
    const scrollY = window.scrollY || window.scrollYOffset;

    //get current scroll position
    var scrollPosition = windowHeight + scrollY;
    // get element position
    var elementPosition = element.getBoundingClientRect().top + elementHeight + scrollY;

    // is element in view
    if (scrollPosition > elementPosition) {
        return true;
    } else {
        return false;
    }
}

function animate() {
    if(inView()) {
        element.classList.add('animate-scroll');
    }
}
