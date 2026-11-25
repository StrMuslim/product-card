import { comments } from "./coment.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFrom_5 = numbers.filter(num => num >= 5);

const clothes = ["шапка", "кепка", "носки", "джинсы", "футболка", "куртка", "костюм"];

const isCap = clothes.includes("кепка");

function reverseArray (array) {
  return array.reverse();
}

const hasGoogleAcc = comments.filter(coment => coment.email.includes(".com"));

const idChanging  = comments.forEach(comment => {comment.id <= 5 ? comment.postId = 2 : comment.postId = 1});

const commentIdsAndNames = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    }
});

const addInvalidKey = comments.map(comment => {
    return {
       ...comments,
       isInvalid: comment.body.length > 180
    }
});

const emails1 = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc ;
}, []);

const emails2 = comments.map(comment => comment.email);

const emailsToString = emails1.join(", ");