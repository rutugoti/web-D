// let btn= document.querySelector("button");
// console.dir(btn);

// // btn.onclick  = function(){
// //     console.log("Button was clicked");
// // }

// function sayMyName(){
//     alert("Button was clicked");
// }

// btn.onclick = sayMyName;


// //event listener
// btn.addEventListener("click", function(){
//     console.log("Button was clicked");
// })

// btn.addEventListener("click", sayMyName);

// //remove event listener
// btn.removeEventListener("click", sayMyName);

// //double click
// btn.addEventListener("dblclick", function(){
//     console.log("Button was double clicked");
// })

// //mouse over
// btn.addEventListener("mouseover", function(){
//     console.log("Mouse is over the button");
// })

// //mouse out
// btn.addEventListener("mouseout", function(){
//     console.log("Mouse is out of the button");
// })


// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerHTML = randomColor    

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// //keyboard events
// let input = document.querySelector("input");
// input.addEventListener("keydown", function(event){
//     console.log("Key down: " + event.key);
// })

// input.addEventListener("keyup", function(event){
//     console.log("Key up: " + event.key);
// })

// input.addEventListener("keypress", function(event){
//     console.log("Key press: " + event.key);
// })


//form events
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
  event.preventDefault(); // Prevents the default form submission behavior
//   alert("Form submitted!");

    let input  = document.querySelector("input");
    console.log("Form submitted with input: " + input.value);
    

})

//more events
//change event
let select = document.querySelector("select");
select.addEventListener("change", function(){
    console.log("Selected option: " + select.value);
})

//focus event
let input = document.querySelector("input");
input.addEventListener("focus", function(){
    console.log("Input field is focused");
})

//blur event
input.addEventListener("blur", function(){
    console.log("Input field lost focus");
})