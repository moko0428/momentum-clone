// 로그인폼
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;

  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }

  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
