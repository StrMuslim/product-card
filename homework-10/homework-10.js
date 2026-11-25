import { productCards } from "./products.js";

const productContair = document.querySelector(".container");
const template = document.querySelector("#template");

function getAmoutOfCards() {
    /*const amoutOfCards = prompt("Сколько карточек отобразить ? От 1 до 5");*/
    if (amoutOfCards >= 1 && amoutOfCards <= 5) {
        return Number(amoutOfCards);
    }

    return null;
}

function showAmoutOfCards(productCards) {
    productCards/*.slice(0, getAmoutOfCards())*/.forEach(item => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".card__productimage").src = "/images/" + item.photo + ".jpg";
    clone.querySelector(".card__category").textContent = item.category;
    clone.querySelector(".card__name").textContent = item.name;
    clone.querySelector(".card__description").textContent = item.description;
    clone.querySelector(".price-box__cost").textContent = item.price.toLocaleString("ru-RU") + " ₽";

    const ingredientList = clone.querySelector(".ingredient-list");

    item.components.forEach(component => {
        const li = document.createElement("li");
        li.textContent = component;
        ingredientList.appendChild(li);
    })

    productContair.appendChild(clone);
})
}

const box = productCards.reduce((acc, product) => {
     acc.push({[product.name] : product.description});
     return acc;
}, []);