const btn = document.querySelector("button");
const img = document.querySelector("img");

const URL = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";

btn.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => img.setAttribute("src", res))
    .catch((err) => console.log(err));
});

shibe = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => img.setAttribute("src", res))
    .catch((err) => console.err(err));
};

shibe()