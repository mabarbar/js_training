// task 1

// const x = 50;
// const y = 30;

// if (x > y) {
//   console.log(`${x} jest większe od ${y}`);
// }

// task 2

// const color = "blue";
// const newColor = "green";

// if (color === newColor) {
//   console.log("Kolory się zgadzają")
// }
// else {
//   console.log("Kolory się nie zgadzają")
// }

// task 3

// const x = 100
// const y = 100

// if(x > y) {
//   console.log("x > y")
// }
// else if(x === y) {
//   console.log("x = y")
// }
// else {
//   console.log("x < y")
// }

// task 4

// const promo = "20%";

// switch (promo) {
//   case "10%":
//     console.log("Dziś mamy 10% zniżki");
//     break;
//   case "20%":
//     console.log("Dziś mamy 20% zniżki");
//     break;
//   case "30%":
//     console.log("Dziś mamy 30% zniżki");
//     break;
//   default:
//     console.log(`Dziś mamy ${promo} zniżki`)
// }

// task 5

// const x = 10;

// if(x % 2 === 0) {
//   console.log("X jest parzyste")
// } else {
//   console.log("X jest nieparzyste")
// }

// task 6

const x = 50;
let text;

if(x >= 100) {
  text = "x >= 100"
}
else if (x < 100 && x > 30) {
  text = "x jest srednie"
}
else {
  text = "x jest małe"
}

console.log(text.toUpperCase())