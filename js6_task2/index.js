const paragraph1 = document.querySelector(".p1");
const paragraph2 = document.querySelector(".p2");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const square = document.querySelector(".square");

const helloWorld = () => {
  console.log("Cześć");
};

const toRed = () => {
  square.style.backgroundColor = "tomato";
};

const toBlue = () => {
  square.style.backgroundColor = "royalblue";
};

const change = () => {
  paragraph1.classList.toggle("show");
  paragraph2.classList.toggle("show");
};

button1.addEventListener("dblclick", helloWorld);
square.addEventListener("mouseover", toRed);
square.addEventListener("mouseout", toBlue);
button2.addEventListener("click", change)