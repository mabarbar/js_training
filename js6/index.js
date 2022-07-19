// const test = document.getElementById("item");
// console.log(test);

// const test2 = document.getElementsByTagName("ul");
// console.log(test2);

// const test3 = document.getElementsByClassName("test");
// console.log(test3);

// querySelector (ES6)

// const test4 = document.querySelector("li");
// console.log(test4);

// const ulList = document.querySelector("ul");
// console.log(ulList);

// const liItem = ulList.querySelector("li"); // zawężanie poszukiwań
// console.log(liItem);

// const liItems = document.querySelectorAll("li");
// console.log(liItems);
// // żywe kolekcje, czyli qSA vs getElementByTag / ClassName
// const test2 = document.getElementsByTagName("li");

// const newLi = document.createElement("li");
// ulList.appendChild(newLi).textContent = "XD";

// console.log(liItems.length);
// console.log(test2.length);

const ulElement = document.createElement("ul");
const liElement = document.createElement("li");
liElement.textContent = "czesc :)";

document.body.appendChild(ulElement);
ulElement.appendChild(liElement);

const blockElement = document.querySelector("div");

const paragraph = document.createElement("p");
paragraph.textContent = "Jestem paragrafem";

blockElement.appendChild(paragraph);

const ulList = document.createElement("ul");
const liList = document.createElement("li");
liList.textContent = "LILILILI";

blockElement.appendChild(ulList);
ulList.appendChild(liList);

const header2 = document.createElement("h2");
header2.textContent = "Header 2";
document.body.appendChild(header2);

const div = document.createElement("div");
document.body.appendChild(div);

const headerMain = document.createElement("h1");
headerMain.textContent = "To jest główny header";
div.appendChild(headerMain);
