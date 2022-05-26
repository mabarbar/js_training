// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// numbers.unshift(-1, 0);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// const colors = ["red", "green", "blue"];
// console.log(colors);

// colors.push("gold", 123);
// console.log(colors);

// colors.pop();
// console.log(colors);

const nums = [1, 2, 3, 4, 5];

function multiply(x) {
  return x * 2;
}

const newNumbers = nums.map(multiply);
console.log(newNumbers);

console.log("---");

const abc = ["a", "b", "c"];
const newAbc = nums.concat(abc);

// console.log(newAbc);

console.log(abc);
console.log(...abc);

const drinks = ["pepsi", "kawa", "sok"];
const meals = ["zupa", "spaghetti", "schabowy"];

const menu = [...drinks, ...meals];
console.log(menu);

console.log("---"); // task

const numbers = [0, 0, 1, 1, 2, 2, 2];
const colors = ["red", "green", "blue", true, 123];
const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

const numbers2 = numbers.slice(0, 2);
console.log(`%cnumbers2:`, "background-color: green");
console.log(numbers2);

const numbers3 = numbers.slice(-3);
console.log(`%cnumbers3:`, "background-color: green");
console.log(numbers3);

randomStuff = colors.splice(-2);
console.log(`%ccolors:`, "background-color: green");
console.log(colors);
console.log(randomStuff);

newCars = cars.splice(2, 4, "test");
console.log(`%ccars:`, "background-color: green");
console.log(cars);

console.log(`%cnewCars:`, "background-color: green");
console.log(newCars);
