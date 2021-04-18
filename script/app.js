// burger animation
const burger = $('.burger');
const nav = $('.nav-links');
const navLink = document.querySelectorAll('.nav-links li')

burger.on('click', () => {
    nav.toggleClass('nav-links-active');

    navLink.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    burger.toggleClass('toggle');
});


let slidePosition = 0;
const slides = $('.beyond-sub');
const totalSlides = slides.length;

$('#next-btn').on('click', () => {
    moveToNextSlide();
});

$('#prev-btn').on('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    //for (let i = 0; i < totalSlides; i++) {
        slides.removeClass('visible');
        //slides[i].classList.remove('visible');
    //}

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

//reveal elements on scroll
window.addEventListener('load', animate);
window.addEventListener('scroll', revealOnScroll);

function animate() {

    /*var width = $(window).width();
    $(window).resize(() => {
        if (width <= 720) {
            $('.nav-links').removeClass('animate');
        }
    });*/

    $('.nav-links').delay(300).queue(() => {
        $('.nav-links').addClass('animate'); 
        if ($(window).width() < 720) {
            $('.nav-links').removeClass('animate');
            $('.nav-links').css('opacity', '1');
        }
    });
    $('.beyond-main-img').delay(600).queue(() => {
        $('.beyond-main-img').addClass('animate');
    });
    $('.home-h1-load').delay(1000).queue(() => {
        $('.home-h1-load').addClass('animate');
    });
    $('.home-p-load').delay(1300).queue(() => {
        $('.home-p-load').addClass('animate');
    });
    $('.sub-links').delay(1600).queue(() => {
        $('.sub-links').addClass('animate');
    });
    $('.sign-up-btn-load').delay(1900).queue(() => {
        $('.sign-up-btn-load').addClass('animate');
    });
    //sign-up page
    $('.form-h3-load').delay(600).queue(() => {
        $('.h3-load').addClass('animate');
    });
    $('.input1-load').delay(800).queue(() => {
        $('.input1-load').addClass('animate');
    });
    $('.input2-load').delay(1000).queue(() => {
        $('.input2-load').addClass('animate');
    });
    $('.input3-load').delay(1200).queue(() => {
        $('.input3-load').addClass('animate');
    });
    $('.label-load').delay(1400).queue(() => {
        $('.label-load').addClass('animate');
    });
    $('.select-load').delay(1600).queue(() => {
        $('.select-load').addClass('animate');
    });
    $('.input4-load').delay(1800).queue(() => {
        $('.input4-load').addClass('animate');
    });
    $('.btn-reg-load').delay(1800).queue(() => {
        $('.btn-reg-load').addClass('animate');
    });
    $('.btn-reset-load').delay(2000).queue(() => {
        $('.btn-reset-load').addClass('animate');
    });
    //about, contact page
    $('.about-contact-p1-load').delay(600).queue(() => {
        $('.about-contact-p1-load').addClass('animate');
    });
    $('.about-contact-h4-load').delay(800).queue(() => {
        $('.about-contact-h4-load').addClass('animate');
    });
    $('.about-p2-load').delay(1000).queue(() => {
        $('.about-p2-load').addClass('animate');
    });
    $('.about-p3-load').delay(1200).queue(() => {
        $('.about-p3-load').addClass('animate');
    });
    $('.contact-h4-load').delay(1200).queue(() => {
        $('.contact-h4-load').addClass('animate');
    });
}

/*$(document).ready(() => {
    $('.beyond-main-img').hide().delay(1000).fadeIn(2000);
});*/

function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        //const scrollY = window.scrollY || window.scrollYOffset;
        //var scrollPosition = windowHeight + scrollY;
        var elementPosition = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        //-revealPoint odlaze dodelu klase active za 150px 
        if (windowHeight - revealPoint > elementPosition) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
