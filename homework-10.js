import { productCards } from "./products.js";

const productContair = document.querySelector(".container");
const template = document.querySelector("#template");


// 3 и 5) Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
function getAmoutOfCards() {
    const amoutOfCards = prompt("Сколько карточек отобразить ? От 1 до 5");
    if (amoutOfCards >= 1 && amoutOfCards <= 5) {
        return Number(amoutOfCards);
    }

    return null;
}

function showAmoutOfCards(productCards) {
    productCards.slice(0, getAmoutOfCards()).forEach(item => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card__productimage").src = item.photo;
    clone.querySelector(".card__category").textContent = item.category;
    clone.querySelector(".card__name").textContent = item.name;
    clone.querySelector(".card__description").textContent = item.description;
    clone.querySelector(".ingredient-box__ingredient-text").textContent = item.ingredientText;
    clone.querySelector(".component1").textContent = item.component1;
    clone.querySelector(".component2").textContent = item.component2;
    clone.querySelector(".component3").textContent = item.component3;
    clone.querySelector(".price-box__cost").textContent = item.price;

    productContair.appendChild(clone);
})
}


showAmoutOfCards(productCards);

// 4) Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const box = productCards.reduce((acc, product) => {
     acc.push({[product.name] : product.description});
     return acc;
}, []);

console.log(box);