// 6)- Импортировать массив коментарии 

import { comments } from "./coment.js";

console.log(comments);


// 2)- создать массив чисел и отфилтровать его

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFrom_5 = numbers.filter(num => num >= 5);

console.log(numbersFrom_5);


// 3)- Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const clothes = ["шапка", "кепка", "носки", "джинсы", "футболка", "куртка", "костюм"];

const isCap = clothes.includes("кепка");

console.log(isCap);


// 4)- Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

function reverseArray (array) {
  return array.reverse();
}

// до reverse 
console.log(numbers);
console.log(clothes);
// после reverse
console.log(reverseArray(numbers));
console.log(reverseArray(clothes));


// 7)- Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const hasGoogleAcc = comments.filter(coment => coment.email.includes(".com"));

console.log(hasGoogleAcc);


// 8)- Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const idChanging  = comments.forEach(comment => {comment.id <= 5 ? comment.postId = 2 : comment.postId = 1});

console.log(comments);


// 9)- Перебрать массив, что бы объекты состояли только из айди и имени

const commentIds_Names = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    }
});

console.log(commentIds_Names);


// 10)- Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const addInvalidKey = comments.map(comment => {
    return {
       ...comments,
       isInvalid: comment.body.length > 180
    }
});

console.log(addInvalidKey[0]);


// 11)- Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

// c reduce()

const emails1 = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc ;
}, []);

console.log(emails2);

// c map()

const emails2 = comments.map(comment => comment.email);

console.log(emails2);


// 12)- Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsToString = emails1.join(", ");

console.log(emailsToString);