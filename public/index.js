// Navigation menu
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  //   menu.classList.toggle('remove')
})

btn.addEventListener('click', () => {
  menu.classList.remove('remove')
})


// sticky nav

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("stickyy", window.scrollY > 0);
})



// accordion

let accordion = document.getElementsByClassName("wrapper");
let minus = document.getElementsByClassName("minus");


for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('activee')
  })
}

// accordion.addEventListener('click', () => {
//   minus.classList.add('activee')
// })


// const carousel = document.querySelector('.carousel');
// const container = document.querySelector('.carousel-container');
// const slides = document.querySelectorAll('.carousel-slide');
// const prevBtn = document.querySelector('.carousel-prev');
// const nextBtn = document.querySelector('.carousel-next');

// let counter = 0;
// const slideWidth = slides[0].clientWidth;
// const slideMargin = 10;

// container.style.transform = `translateX(-${slideWidth + slideMargin}px)`;

// nextBtn.addEventListener('click', () => {
//   if (counter >= slides.length - 1) return;
//   counter++;
//   container.style.transition = 'transform 0.5s ease-in-out';
//   container.style.transform = `translateX(-${slideWidth + slideMargin}px) translateX(-${(slideWidth + slideMargin) * counter}px)`;
// });

// prevBtn.addEventListener('click', () => {
//   if (counter <= 0) return;
//   counter--;
//   container.style.transition = 'transform 0.5s ease-in-out';
//   container.style.transform = `translateX(-${slideWidth + slideMargin}px) translateX(-${(slideWidth + slideMargin) * counter}px)`;
// });

// container.addEventListener('transitionend', () => {
//   if (slides[counter].classList.contains('carousel-slide-first')) {
//     container.style.transition = 'none';
//     counter = slides.length - 2;
//     container.style.transform = `translateX(-${slideWidth + slideMargin}px) translateX(-${(slideWidth + slideMargin) * counter}px)`;
//   }
//   if (slides[counter].classList.contains('carousel-slide-last')) {
//     container.style.transition = 'none';
//   }
// })

