"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
    navToggle.classList.toggle("rotate");
})




const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hide-loader');

    ScrollReveal().reveal('.slide-up', {
    distance: '50px',
    duration: 800,
    easing: 'ease',
    origin: 'bottom',
    });
    ScrollReveal().reveal('.delay-400', {
        delay: 400,
    });
    ScrollReveal().reveal('.delay-600', {
        delay: 600,
    });
    ScrollReveal().reveal('.delay-800', {
        delay: 800,
    });
    ScrollReveal().reveal('.fade-in', {
        duration: 1000,
        easing: 'ease',
        delay: 400,
    })

});


