// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     console.dir(smallImages[i]);
// }

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll(".oldImg"));

//style

let description = document.querySelector("#description");

description.style.color = "red";
description.style.fontSize = "20px";
description.style.fontWeight = "bold";

let smallImages = document.querySelectorAll(".oldImg");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].style.border = "2px solid red";
}   

