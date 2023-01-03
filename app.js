// 로그인폼
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
