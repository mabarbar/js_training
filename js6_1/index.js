// const btn = document.querySelector("button");
// console.log(btn.outerHTML);
// console.log(btn.innerHTML);

// btn.outerHTML = "123";
// btn.innerHTML = "123";

// btn.innerHTML = "<li>siup</li>"
// document.body.innerHTML = ""

// console.log(btn.innerText);
// console.log(btn.textContent);

// btn.textContent = "abcd"
// btn.innerText = "<li>abcd</li>"

// const innerT = document.querySelector(".inner-text")
// const textC = document.querySelector(".text-content")
// console.log(innerT.innerText);
// console.log(textC.textContent);

// const blockElement = document.querySelector("div");
// const butttton = document.querySelector("button");

// blockElement.removeChild(butttton)
// document.body.removeChild(blockElement)

// blockElement.remove();

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

console.log(btn1);
console.log(btn2);
console.log(btn3);

btn1.addEventListener("click", function () {
  console.log("kliknięto mnie!");
});

btn2.addEventListener("mouseover", () => {
  console.log("najechano na mnie!");
});

const doubleClick = () => {
  console.log("double click!");
}

btn3.addEventListener("dblclick", doubleClick);
