const btn = document.querySelector("button");
const img = document.querySelector("img");

const URL = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
const URL2 = "https://api.waifu.pics/sfw/waifu";

shibe = () => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => img.setAttribute("src", res))
    .catch((err) => console.error(err));
};

btn.addEventListener("click", () => {
  fetch(URL2)
    .then((res) => res.json())
    .then((data) => img.setAttribute("src", data.url))
    .catch((err) => console.log(err));
});

shibe();
