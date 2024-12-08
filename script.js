let currentSlide = 0;

const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.display = "block";
});

prevButton.addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].style.display = "block";
});
