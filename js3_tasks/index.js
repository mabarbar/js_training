// task 1

cities = ["warszawa", "lublin", "katowice", "gdańsk", "szczecin"];

for (let i = 0; i < cities.length; i++) {
  console.log(
    `This city is called ${
      cities[i].charAt(0).toUpperCase() + cities[i].slice(1)
    }`
  );
}

console.log("---");
// task 2

let x = 0;

while (x < 10) {
  x += 2;
  console.log(x);
}

console.log("---");
// task 3

let y = 20;

do {
  y -= 3;
} while (y > 0);

console.log(y);

console.log("---");
// task 4

numbers = [5, 8, 10, 23, 48, 60];

for (const number of numbers) {
  if (number % 2) {
    console.log(`%c${number} jest nieparzysta`, 'background-color: gold; color: black');
  } else {
    console.log(`%c${number} jest parzysta`, 'background-color: yellowgreen; color: black');
  }
}
for (const number of numbers) {
  console.log(number / 5);
}
