const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const p = document.querySelector("p");

function Food(name, price) {
  this.name = name;
  this.price = price;
}

Food.prototype.information = function () {
  console.log(`${this.name} kosztuje ${this.price}zł`);
};

const food1 = new Food("Pierogi", 20);
const food2 = new Food("Golonka", 40);
const food3 = new Food("Sałatka", 22);

btn1.addEventListener("click", () => {
  food1.information();
});
btn2.addEventListener("click", () => food2.information());
btn3.addEventListener("click", () => food3.information());

// food1.information()
