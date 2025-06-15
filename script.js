const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fields = [
    "firstName",
    "lastName",
    "username",
    "password",
    "confirmPassword",
    "birthday"
  ];

  // Limpiar errores previos
  fields.forEach(id => {
    document.getElementById(id).classList.remove("error");
    document.getElementById(id + "Error").textContent = "";
  });

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const birthday = document.getElementById("birthday").value;

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  let isValid = true;

  if (!nameRegex.test(firstName)) {
    isValid = false;
    const input = document.getElementById("firstName");
    input.classList.add("error");
    document.getElementById("firstNameError").textContent = "First name no puede contener números ni símbolos.";
  }

  if (!nameRegex.test(lastName)) {
    isValid = false;
    const input = document.getElementById("lastName");
    input.classList.add("error");
    document.getElementById("lastNameError").textContent = "Last name no puede contener números ni símbolos.";
  }

  if (username === "") {
    isValid = false;
    const input = document.getElementById("username");
    input.classList.add("error");
    document.getElementById("usernameError").textContent = "Username es obligatorio.";
  }

  if (password.length < 6) {
    isValid = false;
    const input = document.getElementById("password");
    input.classList.add("error");
    document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 6 caracteres.";
  }

  if (password !== confirmPassword) {
    isValid = false;
    const input = document.getElementById("confirmPassword");
    input.classList.add("error");
    document.getElementById("confirmPasswordError").textContent = "Las contraseñas no coinciden.";
  }

  if (birthday === "") {
    isValid = false;
    const input = document.getElementById("birthday");
    input.classList.add("error");
    document.getElementById("birthdayError").textContent = "Debe ingresar una fecha de nacimiento.";
  }

  if (isValid) {
    alert("¡Registro exitoso!");
    form.reset();
  }
});
