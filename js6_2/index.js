const btn = document.querySelector("button");

const test = (event) => {
  // console.log(event);
  console.log(event.target);
  console.log(event.target.classList);
  console.log(event.target.offsetTop); // odległość górnej krawędzi elementu do górnej krawędzi strony
};

btn.addEventListener("click", test);
