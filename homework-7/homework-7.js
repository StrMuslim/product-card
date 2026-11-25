function showWeather (city,temperature) {
    console.log("Сейчас в " + city + " температура — " + temperature + " градусов по Цельсию.");
}

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

let product = "book";
let price = 300;

function checkBudget(currentBudget) {
    if (currentBudget >= price) {
        console.log(product + " приобретён." + " Спасибо за покупку!");
    } else {
        console.log("Вам не хватает " + (price - currentBudget) + "$, пополните баланс!");
    }
}


function greet(name) {
    console.log("Assalamu aleykum " + name + ", welcome to our community, feel yourself at home!");
}

const country = "Россия";
const name = "StrMuslim";
let age = 20;
