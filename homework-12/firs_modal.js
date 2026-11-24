// 4

class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = document.querySelector(".overlay");
        this.closeBtn = this.modal.querySelector(".modal__exit-button");
        this.registrBtn = document.querySelector(".regisrtation-button");
        this.listenClose();
        this.listenOpen();
    }

    open() {
        this.modal.style.display = "block";
        this.overlay.style.display = "block";
    }

    close() {
        this.modal.style.display = "none";
        this.overlay.style.display = "none";
    }

    isOpen() {
        return this.modal.style.display === "block";
    }

    listenClose() {
        this.closeBtn.addEventListener("click", () => {
            this.close();
        });
    }

    listenOpen() {
        this.registrBtn.addEventListener("click", () => {
            this.open();
        });
    }
}

const registrModal = new Modal("registr-modal");