const colorTheFirst = document.querySelector(
  ".button-container__color-the-first-card",
);

const cardOne = document.querySelector(".card-one");

const colorAll = document.querySelector(".button-container__color-all-cards");

const allCards = document.querySelectorAll(".card");

colorTheFirst.addEventListener("click", function () {
  if (cardOne.style.backgroundColor === "yellow") {
    cardOne.style.backgroundColor = "";
  } else {
    cardOne.style.backgroundColor = "yellow";
  }
});

colorAll.addEventListener("click", function () {
  allCards.forEach(function (card) {
    if (card.style.backgroundColor === "tomato") {
      card.style.backgroundColor = "";
    } else {
      card.style.backgroundColor = "tomato";
    }
  });
});

const title = document.querySelector(".title");

title.addEventListener("click", function () {
  console.log(title);
});
