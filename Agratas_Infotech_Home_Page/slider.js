// script.js
const leftButton = document.querySelector(".slider__btn-left");
const rightButton = document.querySelector(".slider__btn-right");
const slider = document.querySelector(".slider");

let currentSlide = 0;
const slides = [
 "image/Hackathon.jpg",
  "image/internship.webp",
  "image/internspace.webp",
];

// Function to update the slide
function updateSlide(index) {
  slider.style.backgroundImage = `url(${slides[index]})`;
}

// Event Listeners for Buttons
leftButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});

rightButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

// Auto-Sliding Feature
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

// Initialize the First Slide
updateSlide(currentSlide);
