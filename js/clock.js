const clock = document.querySelector("h2#clock");
const clockDate = document.querySelector("h3#date");

function getclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const years = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth()).padStart(1, "0");
  const day = String(date.getDay()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  clockDate.innerText = `${years}년 ${month + 1}월 ${day}일`;
}

getclock();
setInterval(getclock, 1000);
