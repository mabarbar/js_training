const unorderedList = document.createElement("ul");
document.body.appendChild(unorderedList);

for (let i = 1; i <= 10; i++) {
  const listElement = document.createElement("li");
  listElement.textContent = i;
  unorderedList.appendChild(listElement);
}

const listElementLastChild = document.querySelector("li:last-child");
listElementLastChild.textContent = "Jestem ostatnim elementem";

listElementLastChild.style.backgroundColor = "royalblue";
listElementLastChild.style.padding = "20px 40px";
listElementLastChild.style.fontSize = "48px";
