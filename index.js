// alert("Jaka parówa wariacie?");
// console.log("'Witaj świecie' ~konsola");

// const name = "Mateusz";
// let age = 21;
// let favMeal = "lasagne";

// console.log(name);
// console.log(age);
// console.log(favMeal);

// console.log(
//   "Cześć, jestem " + name + " moim ulubionym daniem jest " + favMeal + "."
// );

// console.log(`Cześć, jestem ${name} moim ulubionym daniem jest ${favMeal}.`);

// const name = "Mateusz";
// const petName = "Holi";

// console.log(`Cześć, jestem ${name}, a to jest ${petName}- mój pies.`);

// let petAge = 4;
// console.log(petName + " ma już " + petAge + " lata!");

// konkatenacja


// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// console.log(text1.toUpperCase())
// console.log(text2.toLowerCase())
// console.log(text3.slice(6))
// console.log(text4.includes("czy"))
// console.log(text5.charAt(2))
// console.log(text6.replaceAll("pies", "kot"))
// console.log(text7.split(","))

// const num1 = "123"
// console.log(num1 * 1)  // returns a number

// const num2 = "abc"
// console.log(num2 * 1)  // NaN

// const num3 = 123.456
// console.log(num3.toFixed(2))  // zwraca string

// const num4 = "645"
// console.log(parseInt(num4))  // zamiana stringa na inta

// undefined, null, 0, false, '', Nan zwracają zawsze false

// if(1) {
//   console.log("True");
// } 
// else {
//   console.log("False");
// }

// let a = null
// console.log(a)

function test() {
  console.log("Hi i'm string in a function");
}

test()

const person = {
  name: 'Klaudia',
  age: 23,
  favColor: null
}

console.log(person)

// let x = 5
// const y = 8

// const add = x + y
// console.log(add);

// const substract = x - y
// console.log(substract);

// const multiply = x * y
// console.log(multiply);

// const divide = x / y
// console.log(divide);

// console.log(x);
// x++
// console.log(`Inkrementacja: ${x}`);
// x--
// console.log(`Dekrementacja: ${x}`);

// const modulo = 10 % 3
// console.log(modulo)

// console.log(10 == "10")
// console.log(10 === "10")
// console.log("10" === "10")

// console.log(10 != "10");
// console.log(10 !== "10");
// console.log("10" !== "10");

if(true && false || true) {
  console.log("yup");
}
else {
  console.log("nope")
}