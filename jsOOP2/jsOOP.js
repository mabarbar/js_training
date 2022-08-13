const person = {
  name: "Paulina",
  age: "22",
  job: "Frontend developer",
};

// const showInfo = () => {
//   const { name: firstName, age, job } = person; // destrukturyzacja obiektu
//   // const name = person.name
//   // const age = person.age
//   // const job = person.job

//   console.log(`${firstName} is ${job} and she is ${age}.`);
// };

// showInfo()

const showInfo = ({ name, age, job }) => {
  // const name = person.name
  // const age = person.age
  // const job = person.job

  console.log(`${name} is ${job} and she is ${age}.`);
};

showInfo(person);

const colors = ["blue", "green", "red"];
const [,,third] = colors
console.log(third);