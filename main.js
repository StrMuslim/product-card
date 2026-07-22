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
