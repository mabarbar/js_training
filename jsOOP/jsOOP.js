// const user = {
//   name: "Mateusz",
//   age: "22",
//   car: {
//     brand: "Nissan",
//     model: "Micra",
//     // sound: () => {
//     //   console.log("brrum");
//     // }
//     sound() {
//       console.log("brrum");
//     },
//   },
// };

// user.hair = "brunette";
// user["fav-color"] = "white";

// user.car.sound();
// console.log(user);

// const dogAge = 7;
// const dogBreed = "York";
// const dogName = "Holi";

// const dog = {
//   dogAge: dogAge,
//   breed: dogBreed,
//   dogName,
// };

// dog["dog-food"] = "Royal Canin";

// console.log(dog);

// for (data in dog) {
//   console.log(`Key: ${data}, Value: ${dog[data]}`);
// }

// const user = {
//   name: "Mateusz",
//   printName() {
//     console.log(this.name);
//   }
// };

// user.printName()


function User(name, age) {
  this.name = name;
  this.age = age;
}

const newUser = new User("Paulina", 21);
const newUser2 = new User("Mateusz", 22);
const newUser3 = new User("Kuba", 22);

User.prototype.country = "Polska"
User.prototype.hello = function () {
  console.log(`Hello ${this.name}`);
}

console.log(newUser, newUser2, newUser3);
newUser.hello()