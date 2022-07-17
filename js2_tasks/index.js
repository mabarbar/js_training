// task 1

const x = 50;
const y = 30;

if (x > y) {
  console.log(`${x} > ${y}`);
}

// task 2

const color = "blue";
const newColor = "green";

if (color === newColor) {
  console.log("Colors are matching");
} else {
  console.log("Colors are not matching");
}

// task 3

const X = 100;
const Y = 50;

if (X > Y) {
  console.log(`${X} > ${Y}`);
} else if (X === Y) {
  console.log(`${X} = ${Y}`);
} else {
  console.log(`${X} < ${Y}`);
}

// task 4

const promo = "20%";

switch (promo) {
  case "10%":
    console.log(`Today ${promo} off!`);
    break;
  case "20%":
    console.log(`Today ${promo} off!`);
    break;
  case "30%":
    console.log(`Today ${promo} off!`);
    break;
  default:
    console.log(`Today is the day: ${promo} OFF!!!`);
}

// task 5

const number = 10;

console.log(number % 2 == 0 ? `${number} is odd` : `${number} is even`);

// task 6

const number2 = 50;
let text;

if (number2 >= 100) {
  text = "number is greater than 100";
} else if (number2 < 100 && number2 > 30) {
  text = "number is average";
} else {
  text = "number is small";
}

console.log(text.toUpperCase());
