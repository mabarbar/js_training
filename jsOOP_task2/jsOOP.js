const btns = document.querySelectorAll("button");

btns.forEach(btn => btn.addEventListener("click", function() {
  console.log(this.textContent);
}))

function test() {
  console.log(this.name);
}

const car1 = {
  name: "Nissan",
}

const car2 = {
  name: "KIA",
}

const car3 = {
  name: "Toyota",
}

test.bind(car1)()