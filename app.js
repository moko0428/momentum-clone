// 로그인폼
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function linkClick(event) {
  event.preventDefault();
  console.dir(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", linkClick);
