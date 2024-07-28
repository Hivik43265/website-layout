"use strict"

const swiper = new Swiper(".mySwiper", {
      speed: 500,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: -120,
      // autoplay: {
      //   delay: 10000,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });