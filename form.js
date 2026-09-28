// 5 Создать файл Form.js и реализовать класс для формы под названием Form...

class Form {
    constructor(id) {
        this.form = document.getElementById(id);
    }

    getValues() {
        return Object.fromEntries(new FormData(this.form));
    }

    isValid() {
        return this.form.checkValidity();
    }

    reset() {
        this.form.reset();
    }
}

const modalForm = new Form("modal__form");

console.log(modalForm.getValues());