// script.js
const leftButton = document.querySelector(".slider__btn-left");
const rightButton = document.querySelector(".slider__btn-right");

let currentSlide = 0;
const slides = [
  "image/Hackathon.jpg",
  "image/internship.webp",
  "image/internspace.webp"
]; // Replace with your images
const slider = document.querySelector(".slider");

function updateSlide(index) {
  slider.style.backgroundImage = `url(${slides[index]})`;
}

leftButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});

rightButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

// Initialize the first slide
updateSlide(currentSlide);
