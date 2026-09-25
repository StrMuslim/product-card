// 3 Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов

class Phones {
   constructor(model, color, storage) {
      this.model = model;
      this.color = color;
      this.storage = storage;
   }

   getModel() {
      return this.model;
   }
}

class ButtonPhones extends Phones {
   constructor(model, color, year) {
      super(model, color, 1);
      this.year = year;
   }
}

const phone1 = new ButtonPhones("Nokia", "blue-sky", 2000);

console.log(phone1);
console.log(phone1.getModel());