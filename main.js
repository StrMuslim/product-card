import "./products.js"
import "./coment.js"
import "./homework-7.js"
import "./homework-8.js"
import "./homework-9.js"
import "./homework-10.js"
import "./homework-11.js"
import "./homework-12.js"
import "./modal.js"
import "./form.js"

const colorFirstCardBtn = document.querySelector(
  ".button-container__color-the-first-card",
);

const firstCard = document.querySelector(".card-one");

const colorAllCardsBtn = document.querySelector(".button-container__color-all-cards");

const allCards = document.querySelectorAll(".card");

colorFirstCardBtn.addEventListener("click", function () {
  firstCard.classList.toggle("yellow-background");
});

colorAllCardsBtn.addEventListener("click", function () {
  allCards.forEach(function(card) { 
    card.classList.toggle("tomato-background");
  });
});

const title = document.querySelector(".title");

title.addEventListener("mouseup", function () {
  console.log(title);
});
