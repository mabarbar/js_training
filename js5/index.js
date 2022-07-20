// function test() {
//   console.log("czesc");
// }

// test();

// const helloWorld = function () {
//   console.log("czesc 123");
// };

// helloWorld();

// function add(x, y) {
//   return x + y;
// }

// console.log(add(5,10));

// const heading = document.querySelector("h1");

// heading.addEventListener("click", function () {
//   console.log("Kliknięto mnie!");
// });  // funkcja anonimowa

// const test = function () {
//   console.log("Kliknięto mnie!!");
// };

// heading.addEventListener("click", test);

// const hello = (name) => console.log(`Moje imie to ${name}`);

// const helloAge = (name, age) => {
//   console.log(`Moje imie to ${name} i mam ${age} lata.`);
// };

// hello("Mateusz");
// helloAge("Mateusz", 22);

// const add = (x, y) => x + y;  // nie trzeba return, jeśli dodajemy to dodać {}

// console.log(add(5, 10));

// days = ["monday", "tuesday", "wednesday"];

// const days2 = days.forEach(day => console.log(day));

// const hello = (name = "gościu") => {
//   console.log(`Witaj ${name}, jak się masz?`);
// };

// hello()

// REST

// const numbers = (x, y, ...z) => {
//   console.log(x, y, z);

//   console.log(z.map(el => el ** 2));
// };

// numbers(1, 2, 3, 12, 123, 631, 1345, 23, 6);

const numbers = [0.5, 4, "abc"];
const names = ["Lisa", "Lily", "Adam", "Przemek"];

numbers.forEach((num) => console.log(num * num));

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames);

const showBigNames = (name) => {
  console.log(name.toUpperCase());
};

names.forEach(showBigNames);
console.log("---");

names.forEach((name) => {
  console.log(name.toUpperCase());
});
