const btn = document.querySelector("button");
console.log(btn.outerHTML);
console.log(btn.innerHTML);

// btn.outerHTML = "123";
// btn.innerHTML = "123";

btn.innerHTML = "<li>siup</li>"
// document.body.innerHTML = ""

console.log(btn.innerText);
console.log(btn.textContent);

btn.textContent = "abcd"
btn.innerText = "<li>abcd</li>"
