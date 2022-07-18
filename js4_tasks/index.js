// task

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// const numbers2 = numbers.slice(0, 2);
// const numbers3 = numbers.slice(-3);

// console.log("%cnumbers2", "color: lime");
// console.log(numbers2);
// console.log("");
// console.log("%cnumbers3", "color: lime");
// console.log(numbers3);
// console.log("");

// const randomStuff = [...colors.splice(3)];

// console.log("%ccolors", "color: lime");
// console.log(colors);
// console.log("");
// console.log("%crandomStuff", "color: lime");
// console.log(randomStuff);
// console.log("");

// newCars = [...cars.splice(2, 4, "test")];

// console.log("%ccars", "color: lime");
// console.log(cars);
// console.log("");
// console.log("%cnewCars", "color: lime");
// console.log(newCars);

// task 1

// const letters = ["c", "d"];
// letters.unshift("a", "b");
// letters.push("e", "f");

// console.log(letters);
// console.log(
//   letters.includes("c") ? "Tablica zawiera 'c" : "Tablica nie zawiera 'c"
// );

// task 2

// const numbers = [1, 2, 3];
// const food = ["hamburger", "pizza", "fries"];

// const newArray = food.concat(numbers);
// const newArray = [...numbers, ...food];
// console.log(newArray);

// task 3

// const numbers = [1, 5, 13, 26, 48];

// const newNumbers = numbers.map((number) => number * 5);
// console.log(newNumbers);

// for (let i = 0; i < newNumbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(`Liczba parzysta: ${newNumbers[i]}`);
//   } else {
//     console.log(`Liczba nieparzysta: ${newNumbers[i]}`);
//   }
// }

// for (number of newNumbers) {
//   if (number % 2 === 0) {
//     console.log(`Liczba parzysta: ${number}`);
//   } else {
//     console.log(`Liczba nieparzysta: ${number}`);
//   }
// }

// task 4

// const colors = ["white"];
// colors.unshift("black");
// colors.push("tomato");

// console.log(colors);
// for (let i = 0; i < colors.length; i++) {
//   console.log(`My favourite color is ${colors[i].toUpperCase()}.`);
// }

// for (color of colors) {
//   console.log(color.charAt(0).toUpperCase() + color.slice(1));
// }

// task 5

const cars = "Audi, Mercedes, BMW, Nissan, Dodge";
const carsArray = cars.split(", ");

console.log(carsArray);

carsArray.length > 3 ? console.log("Jest OK") : console.log("Nie jest OK");

if (carsArray.includes("Audi")) {
  carsArray.push("KIA");
} else {
  carsArray.pop();
}

console.log(carsArray);
