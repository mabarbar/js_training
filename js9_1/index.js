const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
  .then((res) => res.json())
  .then((res) => one.setAttribute("src", res.message));
