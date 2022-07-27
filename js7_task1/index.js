imageTag = document.querySelector("img");

const clgAnything = () => {
  console.log("cokolwiek");
};

imageTag.setAttribute("src", "https://picsum.photos/600/400?grayscale");
imageTag.setAttribute("alt", "Obrazek");

setTimeout(clgAnything, 2000);
