class Drink {
    #temperature 
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `Название: ${this.name}, Объем: ${this.size}ml, Цена: ${this.price}₽, Температура: ${this.#temperature}°С`;
    }

    get temperature() {
        return this.#temperature;
    }

    set temperature(temperature) {
        this.#temperature = temperature;
    }

    #prepareDrink() {
        console.log(`Готовим ${this.name}...`);
    }

    serveDrink() {
        this.#prepareDrink();
        console.log(`${this.name} готов, а деньги где?`);
    }
}

class Tea extends Drink {
    constructor(name, size, price, temperature, teaType, origin, assemblyMethod) {
        super(name, size, price, temperature);
        this.teaType = teaType;
        this.origin = origin;
        this.assemblyMethod = assemblyMethod;
    }

    getInfo() {
        return super.getInfo() + ` Вид чая: ${this.teaType}, Происхождение чая: ${this.origin}, Тип сборки: ${this.assemblyMethod}`;
    }
}

class Lemonade extends Drink {
    constructor(name, size, price, temperature, sugarLevel, carbonationLevel) {
        super(name, size, price, temperature);
        this.sugarLevel = sugarLevel;
        this.carbonationLevel = carbonationLevel;
    }

    getInfo() {
        return super.getInfo() + ` Уровень сахара: ${this.sugarLevel}, Уровень газировки: ${this.carbonationLevel}`;
    }
}

class Coffee extends Drink {
    constructor(name, size, price, temperature, sugarLevel, coffeeType, milk, strength, beanType) {
        super(name, size, price, temperature);
        this.sugarLevel = sugarLevel;
        this.coffeeType = coffeeType;
        this.milk = milk;
        this.strength = strength;
        this.beanType = beanType;
    }

    getInfo() {
        return super.getInfo() + ` Уровень сахара: ${this.sugarLevel}, Вид кофе: ${this.coffeeType}, Молоко: ${this.milk}, Крепость: ${this.strength}, Вид зерна: ${this.beanType}`;
    }
}

const tea = new Tea("Чай", 250, 50, 75, "Чёрный", "Индия", "Ручная");
const lemonade = new Lemonade("Лимонад", 500, 300, 18, "Средний", "Средний");
const coffee = new Coffee("Кофе", 270, 400, 80, "Низкий", "Капучино", "Содержит", "Крепкий", "Арабикa");

class Cafe {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    get cafeInfo() {
        return `Название: ${this.name}, Адрес: ${this.address}`;
    }

    orderDrink(drink) {
        drink.serveDrink();
    }
}

const cafe = new Cafe("Рахат", "Г.Москва Ул.Набережний д.49");

console.log(cafe.cafeInfo);
cafe.orderDrink(lemonade);