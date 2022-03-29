"use strict";

const question = document.querySelector(".single-question");

question.addEventListener("click", (e) => {
  const answer = document.querySelector(".answer");
  const questionText = document.querySelector(".single-question p");
  const arrowIcon = document.querySelector(".arrow-icon");
  questionText.classList.toggle("selected-question");
  arrowIcon.classList.toggle("arrow-icon-active");
  answer.classList.toggle("show-answer");
});
