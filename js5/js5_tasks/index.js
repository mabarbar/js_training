// const greetings = function (name, age) {
//   console.log(`Cześć, mam na imię ${name} i mam ${age} lata.`);
// };

// greetings("Mateusz", 22);

// task 1

// let score;

// const add = (x, y) => {
//   score = x + y;
//   score % 2 === 0 ? evenMsg(score) : oddMsg(score);
// };

// const evenMsg = (parametr) => {
//   console.log(`Liczba ${parametr} jest parzysta`);
// };

// const oddMsg = (parametr) => {
//   console.log(`Liczba ${parametr} jest nieparzysta`);
// };

// add(10, 5);

// task 2

// const celsius = 20;
// let temp;

// const conversion = (celsius) => {
//   temp = celsius * 1.8 + 32;
//   return temp;
// };

// const fahrenheit = conversion(celsius);
// console.log(`${celsius}°C = ${fahrenheit}°F`);

// task 3

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
  numbers.push(i);
}

const checkNum = (number) => {
  if (number % 3 === 0 && number !== 0) {
    console.log(`${number} jest podzielne przez 3`);
  } else {
    console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0`);
  }
};

console.log(numbers);
numbers.forEach(checkNum);
