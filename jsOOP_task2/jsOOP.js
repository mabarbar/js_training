const btns = document.querySelectorAll("button");

btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    console.log(this.textContent);
  })
);

function test() {
  console.log(this.name);
}

const car1 = {
  name: "Nissan",
};

const car2 = {
  name: "KIA",
};

const car3 = {
  name: "Toyota",
};

test.bind(car1)();



// const movie = {
//   title: "Adwokat diabła",
// };

// function showMovie(price, cinema) {
//   console.log(`Film ${this.title}, cena: ${price}zł, kino: ${cinema}. `);
// }

// const movieData = [20, "Multikino"];

// showMovie(20, "Cinemacity");
// showMovie.call(movie, 20, "Cinemacity");
// showMovie.apply(movie, movieData);
