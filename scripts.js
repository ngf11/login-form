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
  console.log(messages);
});

// function emailValidation() {
//   //   if (password.value === "" && confirmPassword.value === "") {
//   //     emailAlert.innerText = "";
//   //   }

//   if (password.value === confirmPassword.value) {
//     emailAlert.style.color = "green";
//     emailAlert.innerText = "passwords matching";
//   }

//   if (password.value != confirmPassword.value) {
//     emailAlert.style.border = " 5px solid rgba(233, 13, 13, 0.936)";
//     emailAlert.style.color = "red";
//     emailAlert.innerText = "passwords  do not matching";
//   }
// }
// emailValidation();
