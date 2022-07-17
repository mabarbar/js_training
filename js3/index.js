const foodArray = [
  "hamburger",
  "pizza",
  "french-fries",
  "spaghetti",
  "chicken-wings",
];

for (let i = 0; i < 6; i++) {
  console.log(i);
}

for (i = 0; i < foodArray.length; i++) {
  console.log(foodArray[i]);
}

const colorArray = ["red", "green", "blue"];

for (i = 0; i < colorArray.length; i++) {
  console.log(colorArray[i]);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("---");

let k = 0;
do {
  k++;
  console.log(k);
} while (k < 2);

console.log("---");

const numbers = [1, 2, 3, 4, 5];
for (let l = 0; l < numbers.length; l++) {
  console.log(numbers[l] * 2)
}

console.log("---");

for(const number of numbers) {
  console.log(number * 2)
}