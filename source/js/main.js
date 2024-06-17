// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { setPriceTabs, setFaqTabs } from './tabs.js';

setPriceTabs();
setFaqTabs();

let juriSwiper = new Swiper(".juri__swiper", {
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".juri__slider-button--right",
    prevEl: ".juri__slider-button--left"
  },
  mousewhell: true,
  keyboard: true
})

let reviewsSwiper = new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".reviews__slider-button--right",
    prevEl: ".reviews__slider-button--left"
  },
  mousewhell: true,
  keyboard: true
})
