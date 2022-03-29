"use strict";

const questionNode = document.querySelectorAll(".single-question");

// Turn nodeList into Array
const questions = [...questionNode];

questions.forEach((question, i) => {
  question.addEventListener("click", (e) => {
    const clickedItem = e.target.closest("div");
    const answer = clickedItem.querySelector(".answer");
    const questionText = clickedItem.querySelector(".question-text");
    const arrowIcon = clickedItem.querySelector(".arrow-icon");
    questionText.classList.toggle("selected-question");
    arrowIcon.classList.toggle("arrow-icon-active");
    answer.classList.toggle("show-answer");
  });
});
