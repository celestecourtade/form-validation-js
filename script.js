const form = document.getElementById("registrationForm");

// Inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const birthdayInput = document.getElementById("birthday");
const newsletterCheckbox = document.getElementById("newsletter");

// Spans para errores
const errorFirstName = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorUsername = document.getElementById("errorUsername");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmPassword = document.getElementById("errorConfirmPassword");
const errorBirthday = document.getElementById("errorBirthday");

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

function validateFirstName() {
  const value = firstNameInput.value.trim();
  if (!nameRegex.test(value) || value === "") {
    errorFirstName.textContent = "First name no puede contener números ni símbolos y no puede estar vacío.";
    firstNameInput.classList.add("error");
    return false;
  } else {
    errorFirstName.textContent = "";
    firstNameInput.classList.remove("error");
    return true;
  }
}

function validateLastName() {
  const value = lastNameInput.value.trim();
  if (!nameRegex.test(value) || value === "") {
    errorLastName.textContent = "Last name no puede contener números ni símbolos y no puede estar vacío.";
    lastNameInput.classList.add("error");
    return false;
  } else {
    errorLastName.textContent = "";
    lastNameInput.classList.remove("error");
    return true;
  }
}

function validateUsername() {
  const value = usernameInput.value.trim();
  if (value === "") {
    errorUsername.textContent = "Username es obligatorio.";
    usernameInput.classList.add("error");
    return false;
  } else {
    errorUsername.textContent = "";
    usernameInput.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  const value = passwordInput.value;
  if (value.length < 6) {
    errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres.";
    passwordInput.classList.add("error");
    return false;
  } else {
    errorPassword.textContent = "";
    passwordInput.classList.remove("error");
    return true;
  }
}

function validateConfirmPassword() {
  const passwordValue = passwordInput.value;
  const confirmValue = confirmPasswordInput.value;
  if (confirmValue !== passwordValue || confirmValue === "") {
    errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
    confirmPasswordInput.classList.add("error");
    return false;
  } else {
    errorConfirmPassword.textContent = "";
    confirmPasswordInput.classList.remove("error");
    return true;
  }
}

function validateBirthday() {
  const value = birthdayInput.value;
  if (value === "") {
    errorBirthday.textContent = "Debe ingresar una fecha de nacimiento.";
    birthdayInput.classList.add("error");
    return false;
  } else {
    errorBirthday.textContent = "";
    birthdayInput.classList.remove("error");
    return true;
  }
}

// Validación en tiempo real
firstNameInput.addEventListener("input", validateFirstName);
lastNameInput.addEventListener("input", validateLastName);
usernameInput.addEventListener("input", validateUsername);
passwordInput.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword(); // para actualizar si cambió la password
});
confirmPasswordInput.addEventListener("input", validateConfirmPassword);
birthdayInput.addEventListener("input", validateBirthday);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validamos todos al enviar
  const validFirstName = validateFirstName();
  const validLastName = validateLastName();
  const validUsername = validateUsername();
  const validPassword = validatePassword();
  const validConfirmPassword = validateConfirmPassword();
  const validBirthday = validateBirthday();

  if (
    validFirstName &&
    validLastName &&
    validUsername &&
    validPassword &&
    validConfirmPassword &&
    validBirthday
  ) {
    // Guardar datos en localStorage
    const userData = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      username: usernameInput.value.trim(),
      birthday: birthdayInput.value,
      newsletter: newsletterCheckbox.checked,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("¡Registro exitoso! Datos guardados.");
    form.reset();

    // Remover clases de error y mensajes
    errorFirstName.textContent = "";
    errorLastName.textContent = "";
    errorUsername.textContent = "";
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";
    errorBirthday.textContent = "";

    firstNameInput.classList.remove("error");
    lastNameInput.classList.remove("error");
    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");
    birthdayInput.classList.remove("error");
  }
});
