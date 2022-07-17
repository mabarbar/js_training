const password = "3j1wew8ahsad!";

if (password.length > 10 && password.includes("!")) {
  console.log("Masz hasło które ma więcej niż 10 znaków i wykrzyknik...");
} else if (password.length > 10) {
  console.log("Masz hasło które ma więcej niż 10 znaków...");
} else {
  console.log("Nie masz hasła, które ma więcej niż 10 znaków...");
}

let day = "Piątek";

switch (day) {
  case "Monday":
    console.log(`Jest ${day}`);
    break;
  case "Tuesday":
    console.log(`Jest ${day}`);
    break;
  case "Wednesday":
    console.log(`Jest ${day}`);
    break;
  case "Thursday":
    console.log(`Jest ${day}`);
    break;
  case "Friday":
    console.log(`Jest ${day}`);
    break;
  default:
    console.log("Jest weekend!");
}

x = 10;
const newX = x > 20 ? `${x} > 20` : `${x} < 20`;
// operator logiczny jednolinijkowy (tylko do 1 if)

console.log(newX);

const isLoggedIn = true;

function loggedIn() {
  console.log("Użytkownik jest zalogowany");
}

function loggedOut() {
  console.log("Użytkownik jest wylogowany");
}

if (isLoggedIn) {
  loggedIn();
} else {
  loggedOut();
}

isLoggedIn ? loggedIn() : loggedOut()