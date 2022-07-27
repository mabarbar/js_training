listElements = document.querySelectorAll("li");
number = 1;

for (let i = 0; i < listElements.length; i++) {
  listElements[i].textContent = i + 1;
  listElements[i].dataset.id = i + 1;
}

for (listElement of listElements) {
  listElement.textContent = number;
  listElement.dataset.id = number;
  number++;
}

const liThird = document.querySelector("[data-id = '3']");
console.log(liThird.closest(".wrapper"));
