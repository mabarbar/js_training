const btn = document.querySelector("button");
const img = document.querySelector("img");

const URL = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
const URL2 = "https://dog.ceo/api/breeds/image/random";

shibe = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => img.setAttribute("src", res))
    .catch((err) => console.error(err));
};

// async function test() {
//   try {
//     const res = await fetch(URL);
//     const data = await res.json();
//     img.setAttribute("src", data);
//   } catch {
//     console.error("error");
//   }
// }

btn.addEventListener("click", () => {
  fetch(URL2)
    .then((res) => res.json())
    .then((data) => img.setAttribute("src", data.message))
    .catch((err) => console.log(err));
});

// btn.addEventListener("click", test);

shibe();
