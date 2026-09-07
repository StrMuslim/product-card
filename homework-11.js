const input = document.querySelector("#input");
const form = document.querySelector(".footer__form");
const SubscribeBtn = document.querySelector(".footer__button");
const errorMessage= document.querySelector(".footer__error-massage");



form.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = input.value;

    if (email === "") {
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Ведите правилную почту!";
        input.classList.add("input-error")
        return;
    }

    console.log({email: email});
    input.value = "";
});

input.addEventListener("input", function() {
    errorMessage.textContent = "";
    input.classList.remove("input-error");
});


// 5 - 6 - 7 


const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalExitButton = document.querySelector(".modal__exit-button");
const registrationButton = document.querySelector(".regisrtation-button");
const registrationForm = document.querySelector(".modal__form");
const modalRegistrationButton = document.querySelector(".modal__registr-btn");
const inputs = document.querySelectorAll(".inputs");
const inputPassword = document.querySelector(".password");
const inputRepeatPassword = document.querySelector(".repeat-password");
const incorrectPasswordTextMessage = document.querySelector(".incorrect-repeat-password");





registrationButton.addEventListener("click", function() {
    overlay.style.display = "block";
    modal.style.display = "block";
});


modalExitButton.addEventListener("click", function() {
    overlay.style.display = "none";
    modal.style.display = "none";
});

let user;

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = inputPassword.value;
    const repeatPassword = inputRepeatPassword.value;

    if (password !== repeatPassword) {

        inputPassword.classList.add("error-password");
        inputRepeatPassword.classList.add("error-password");
        incorrectPasswordTextMessage.textContent = "Пароли не совпадают!";


        alert("Регистрация отклонена");
        return;
    }

    user = {
        ...Object.fromEntries(new FormData(registrationForm)),
        createdOn : new Date()
    };

    console.log(user);

    overlay.style.display = "none";
    modal.style.display = "none";


});

inputPassword.addEventListener("input", function() {
    inputPassword.classList.remove("error-password");
    inputRepeatPassword.classList.remove("error-password");
    incorrectPasswordTextMessage.textContent = "";

})

inputRepeatPassword.addEventListener("input", function() {
    inputPassword.classList.remove("error-password");
    inputRepeatPassword.classList.remove("error-password");
    incorrectPasswordTextMessage.textContent = "";

})

