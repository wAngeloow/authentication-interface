const formMessage = document.querySelector("#form-message");

const loginDiv = document.querySelector("#login");
const registerDiv = document.querySelector("#register");

const loginButton = document.querySelector("#login-button");
const registerButton = document.querySelector("#register-button");

const popup = document.querySelector("#popup");
const popupMessage = document.querySelector("#popup-message");

const forms = document.querySelectorAll("form");

//Trocar formulário
registerButton.addEventListener("click", () => {
    loginDiv.classList.add("hidden");
    registerDiv.classList.remove("hidden");

    loginButton.classList.remove("select");
    registerButton.classList.add("select");

    formMessage.innerHTML = "Crie sua conta"
});

loginButton.addEventListener("click", () => {
    registerDiv.classList.add("hidden");
    loginDiv.classList.remove("hidden");

    registerButton.classList.remove("select");
    loginButton.classList.add("select");

    formMessage.innerHTML = "Entre na sua conta"
});

//Mostrar e ocultar senha
const eyeIcons = document.querySelectorAll(".toggle-password");

eyeIcons.forEach(icon => {
    icon.addEventListener("click", () => {

        const container = icon.closest(".relative")
        const passwordInput = container.querySelector(".password-input");

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    });
});

//Validar formulário
forms.forEach(form => {
    const inputs = form.querySelectorAll("input");
    const button = form.querySelector(".submit-button");

    function validateForm() {
        let valid = true;

        inputs.forEach(input => {
            if (input.type === "checkbox") {
                if (!input.checked) {
                    valid = false;
                }
            } else {
                if (input.value.trim() === "") {
                    valid = false;
                }
            }
        });
        if (valid) {
            button.disabled = false;
            button.classList.remove("opacity-50", "cursor-not-allowed");

            button.classList.add("cursor-pointer");
        } else {
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");

            button.classList.remove("cursor-pointer");
        }
    }
    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
        input.addEventListener("change", validateForm);
    });
    validateForm();
});

//Submit
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showPopup("Logado com sucesso!");
    loginForm.reset();
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showPopup("Conta criada com sucesso!");
    registerForm.reset();
});

//Popup
function showPopup(message) {
    popupMessage.innerHTML = message;
    popup.classList.remove("hidden");
    popup.classList.add("flex");

    setTimeout(() => {
        popup.classList.remove("flex");
        popup.classList.add("hidden");
    }, 3000);
}

//Footer year
document.querySelector("#current-year").innerHTML = new Date().getFullYear();