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