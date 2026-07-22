// Третий пункт.

function showWeather (city,temperature) {
    console.log("Сейчас в " + city + " температура — " + temperature + " градусов по Цельсию.");
}

showWeather("Мекка", 38);

// Четвертый пункт.

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость!");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость!");
    } else if (speed === SPEED_OF_LIGHT) {
        console.log("Скорость света!");
    }
}

checkSpeed(299792458);

// Пятый пункт.

let product = "book"
let price = 300

function checkBudget(currentBudget) {
    if (currentBudget >= price) {
        console.log(product + " приобретён." + " Спасибо за покупку!");
    } else {
        console.log("Вам не хватает " + (price - currentBudget) + "$, пополните баланс!");
    }
}

checkBudget(300);

// Шестой пункт.

function greet(name) {
    console.log("Assalamu aleykum " + name + ", wellcome to our comunity, feel yourself at home!");
}

greet("@StrMuslim");

// Седьмой пункт.

const country = "Россия";
const name = "StrMuslim";
let age = 20;

console.log("салам я " + name + " из " + country);

