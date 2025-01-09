"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
    navToggle.classList.toggle("rotate");
})


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hide-loader');
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Show 1 slide at a time
    spaceBetween: 20, // Space between slides (optional)
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
});