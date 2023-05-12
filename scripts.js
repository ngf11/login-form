const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const alert = document.getElementById("message");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("tel");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value === "" || firstName.value == null) {
    messages.push("Name is required");
  }
  if (messages.length > 0) {
    e.preventDefault();
    alert.innerText = messages.join(", ");
  }
  if (lastName.value === "" || lastName.value == null) {
    messages.push(" Last name is required");
  }
  if (messages.length > 0) {
    e.preventDefault();
    alert.innerText = messages.join(", ");
  }
  if (password.value === confirmPassword.value) {
    messages.push(" Password Matched");

    alert.innerText = messages.join(", ");
  } else if (password.value !== confirmPassword.value) {
    messages.push(" Password not Matched");
    alert.innerText = messages.join(", ");
    e.preventDefault();
  } else {
    messages.push(" ");
    alert.innerText = messages.join(", ");
    e.preventDefault();
  }
  passwordlength();
});
