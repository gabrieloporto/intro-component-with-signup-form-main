const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Validar el campo de correo electrónico
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailValue.length > 0 && emailRegex.test(emailValue);
  const emailErrorMessage = document.querySelector("#email-error");
  const emailIconError = document.querySelector("#third-icon-error");
  if (emailValue.length === 0) {
    // Cambiar el color del placeholder del input de correo electrónico
    emailInput.placeholder = "email@example.com";
    emailInput.style.border = "2px solid var(--red)";
    // Mostrar el mensaje de error y el icono de error
    emailErrorMessage.style.display = "block";
    emailIconError.style.display = "block";
  } else if (!isValidEmail) {
    emailInput.style.color = "inherit";

    // Mostrar el mensaje de error y el icono de error
    emailErrorMessage.style.display = "block";
    emailIconError.style.display = "block";
  } else {
    emailInput.style.color = "inherit";
  }

  // Validar el campo de nombre
  const firstNameValue = firstNameInput.value;
  const firstNameErrorMessage = document.querySelector("#first-name-error");
  const firstNameIconError = document.querySelector("#first-icon-error");
  if (firstNameValue.length === 0) {
    firstNameErrorMessage.style.display = "block";
    firstNameIconError.style.display = "block";
    firstNameInput.style.border = "2px solid var(--red)";
  } else {
    firstNameErrorMessage.style.display = "none";
    firstNameIconError.style.display = "none";
  }

  // Validar el campo de apellido
  const lastNameValue = lastNameInput.value;
  const lastNameErrorMessage = document.querySelector("#last-name-error");
  const lastNameIconError = document.querySelector("#second-icon-error");
  if (lastNameValue.length === 0) {
    lastNameErrorMessage.style.display = "block";
    lastNameIconError.style.display = "block";
    lastNameInput.style.border = "2px solid var(--red)";
  } else {
    lastNameErrorMessage.style.display = "none";
    lastNameIconError.style.display = "none";
  }

  // Validar el campo de contraseña
  const passwordValue = passwordInput.value;
  const passwordErrorMessage = document.querySelector("#password-error");
  const passwordIconError = document.querySelector("#four-icon-error");
  if (passwordValue.length === 0) {
    passwordErrorMessage.style.display = "block";
    passwordIconError.style.display = "block";
    passwordInput.style.border = "2px solid var(--red)";
  } else {
    passwordErrorMessage.style.display = "none";
    passwordIconError.style.display = "none";
  }
});
