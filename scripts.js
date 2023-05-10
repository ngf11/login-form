const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");
const emailAlert = document.getElementById("message");
const name = document.getElementById("firstName");
const lastName = document.getElementById("Lastname");
const phone = document.getElementById("tel");
const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   let messages = [];
//   e.preventDefault();
// });

function emailValidation() {
  //   if (password.value === "" && confirmPassword.value === "") {
  //     emailAlert.innerText = "";
  //   }

  if (password.value === confirmPassword.value) {
    emailAlert.style.color = "green";
    emailAlert.innerText = "passwords matching";
  }

  if (password.value != confirmPassword.value) {
    emailAlert.style.border = " 5px solid rgba(233, 13, 13, 0.936)";
    emailAlert.style.color = "red";
    emailAlert.innerText = "passwords  do not matching";
  }
}
emailValidation();
