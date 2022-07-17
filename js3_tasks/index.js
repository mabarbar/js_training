// task 1

// cities = ["warszawa", "lublin", "katowice", "gdańsk", "szczecin"];

// for (let i = 0; i < cities.length; i++) {
//   console.log(
//     `To miasto nazywa się ${
//       cities[i].charAt(0).toUpperCase() + cities[i].slice(1)
//     }.`
//   );
// }

// task 2

// let x = 0;

// while (x < 10) {
//   x += 2;
//   console.log(x);
// }

// task 3

// let x = 20;
// do {
//   x -= 3;
//   console.log(x)
// } while (x > 0);

// task 4

numbers = [5, 8, 10, 23, 48, 60];

for (const i of numbers) {
  console.log(i / 5);
}

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(`%cLiczba ${number} jest parzysta.`, "color: black; background: gold");
  } else {
    console.log(`%cLiczba ${number} jest nieparzysta.`, "color: black; background: salmon");
  }
}
