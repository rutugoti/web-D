let btn = document.querySelector("button");

let ul  = document.querySelector("ul");

let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.textContent = inp.value;
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
});