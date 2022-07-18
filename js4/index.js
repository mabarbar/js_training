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

// const nums = [1, 2, 3, 4, 5];

// function multiply(x) {
//   return x * 2;
// }

// const newNumbers = nums.map(multiply);
// console.log(newNumbers);

// console.log("---");

// const abc = ["a", "b", "c"];
// const newAbc = nums.concat(abc);

// console.log(newAbc);

// console.log(abc);
// console.log(...abc);

// const drinks = ["pepsi", "kawa", "sok"];
// const meals = ["zupa", "spaghetti", "schabowy"];

// const menu = [...drinks, ...meals];
// console.log(menu);

// console.log("---");

// const numbers = [0, 23, 48, 175, 2, 34, 11];

// function number(x) {
//   return x % 2 === 0;
// }

// console.log(numbers.filter(number))

// numbers.forEach((number) => console.log(number));

const numbers = [0, 1, 2, 3];

const newNumbers = numbers.forEach(number => console.log(number * 2))
console.log(newNumbers)

const mapNumbers = numbers.map(number => number * 2)
console.log(mapNumbers)
