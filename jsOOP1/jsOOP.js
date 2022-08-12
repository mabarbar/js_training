// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hej jestem ${this.name}!`);
// };

// Person.prototype.sayAge = function () {
//   console.log(`Hej mam ${this.age} lat/a!`);
// };

// const person1 = new Person("Mateusz", 23);

// person1.sayHi();
// person1.sayAge();

// // ============

// class Person2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hej jestem ${this.name}!`);
//   }

//   sayAge = function () {
//     console.log(`Hej mam ${this.age} lat/a!`);
//   };
// }

// const person2 = new Person2("Paula", 22);
// person2.sayHi();
// person2.sayAge();

// ============

function Dish(meat, garnish, drink) {
  this.meat = meat;
  this.garnish = garnish;
  this.drink = drink;
}

Dish.prototype.showIngredients = function () {
  console.log(
    `Ingredients: ${this.meat}, ${this.garnish}, Drink: ${this.drink}`
  );
};

const meal1 = new Dish("Beef", "Raspberry dressing", "Red wine");
meal1.showIngredients();

// ============

class Dish2 {
  constructor(meat, garnish, drink) {
    this.meat = meat;
    this.garnish = garnish;
    this.drink = drink;
  }

  showIngredients() {
    console.log(
      `Ingredients: ${this.meat}, ${this.garnish}, Drink: ${this.drink}`
    );
  }
}

const meal2 = new Dish2("Chicken", "Fries", "Cola");
meal2.showIngredients();
