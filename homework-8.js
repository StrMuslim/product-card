// 3)- создать объект на основе моих данных 

const adminInfo = {
    name : "Анис",
    surename : "Партобов",
    age : 20,
    email : "partobovohunso@gmail.com",
    job : "студент",
    country : "Россия",
    city : "Сургут",
    marrigeStatus : "холост",
    sitizenship : "Россия",
    bankAccount : "0 &#8381;"
};

// 4)- создать данные об автомобиле 

const carInfo = {
    brand: "toyota",
    model: "",
    color: "чёрный",
    year: 2020,
    gearbox: "автомат",
    cylinder: 4
};

carInfo.owner = adminInfo;

// 5)- создать функцию который добавляет свойство и значение при их отсутствии

function addMaxSpeed(obj) { 
    if(obj.maxSpeed) {
        return;
    } else {
        obj.maxSpeed = 300;
    }
}

addMaxSpeed(carInfo);

console.log(Object.keys(carInfo))
console.log(carInfo.maxSpeed)

// 6)- создать функцию 

function showValue(obj , key) {
    console.log(obj[key])
}

showValue (carInfo, "maxSpeed");

// 7)- создать массив 

const products = ["молоко", "хлеб", "яицо", "мясо", "сахар", "сыр"];


// 8)- создать массив из объектов и добавит через метода в конце массива ещё один объект 

const phones = [
    {company : "MI" , name : "mi 13 ultra", year : 2024, color : "black", class : "premium flagship",OS : "android 15"},
    {company : "oppo" , name : "oppo 6 plus", year : 2020, color : "grey", class : "econom",OS : "android 8"},
    {company : "honor" , name : "honor 6", year : 2016, color : "dark green", class : "econom" ,OS : "android 6"},
    {company : "apple" , name : "iPhone 17 pro max", year : 2025, color : "deep blue" , class : "premium flagship" ,OS : "iOS 26"}
];

const newPhone = {
    company : "vivo" ,
    name : "neo 6 pro",
    year : 2023,
    color : "grey",
    class : "econom",
    OS : "android 10"
};

phones.push(newPhone)

console.log(phones)


// 9)- создать еще один массив и объеденить его с массивом из 8) 

 const samsungPhones = [
    {company : "samsung" , name : "s20 ultra", year : 2018, color : "grey" , class : "premium flagship" , OS : "android 10"},
    {company : "samsung" , name : "s22", year : 2020, color : "black" , class : "flagship" , OS : "android 12"},
    {company : "samsung" , name : "s24 ultra", year : 2023, color : "white" , class : "premium flagship" , OS : "android 14"},
    {company : "samsung" , name : "s5", year : 2010, color : "grey" , class : "econom" , OS : "android 5"}
 ];

 const allPhones = [...phones, ...samsungPhones];

 console.log(allPhones)

// 10)- создать массив и использовать метод map()

const rarePhones = allPhones.map(function(item) {
    if (item.class === "premium flagship") {
       item.isRare = true;
    } else {
       item.isRare = false;
    }
    return item;
});

console.log(allPhones[2].isRare)
console.log(rarePhones)