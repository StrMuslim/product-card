export class Modal {
    #openBtn
    #exitBtn

    constructor(modalID, exitBtnID, openBtnID, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalID);
        this.#openBtn = document.getElementById(openBtnID);
        this.#exitBtn = document.getElementById(exitBtnID);
        this.overlay = document.getElementById("overlay");
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.open();
    }

    open() {
        this.#openBtn.addEventListener("click", this.#handleOpen);
    }

    #handleClose = () => {
        if(this.shouldCloseOnOverlay) {
            this.overlay.removeEventListener("click", this.#handleClose);
        }

        this.#exitBtn.removeEventListener("click", this.#handleClose);

        this.#closeModal();
    }

    #handleOpen = () => {
        this.#openModal();

        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener("click", this.#handleClose);
        }

        this.#exitBtn.addEventListener("click", this.#handleClose);
    }


    #openModal() {
        this.modal.classList.add("modal-showed");
        this.overlay.classList.add("overlay-showed");
    }

    #closeModal = ()=> {
        this.modal.classList.remove("modal-showed");
        this.overlay.classList.remove("overlay-showed");
    }
}