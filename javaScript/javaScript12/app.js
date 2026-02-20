// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello function");
//     hello();

// }

// console.log("calling demo function");
// demo();
// console.log("end of code");


// //visualize the call stack in the console

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans  = two()+two();
//     console.log(ans);
// }

// three();

//single threded synchronous programming


//call back hell

// h1 = document.querySelector("h1");

// function changeColor() {
//   h1.style.color = "red";
//   setTimeout(function () {
//     h1.style.color = "orange";
//     setTimeout(function () {
//       h1.style.color = "yellow";        
//         setTimeout(function () {    
//             h1.style.color = "green";
//             setTimeout(function () {
//                 h1.style.color = "blue";
//                 setTimeout(function () {
//                     h1.style.color = "indigo";
//                     setTimeout(function () {
//                         h1.style.color = "violet";
//                     }, 11000);
//                 }, 12000);
//             }, 13000);
//         }, 14000);
//     }, 15000);
//   }, 16000);
// }

// changeColor();


//promise
//then and catch

// let p = new Promise(function(resolve, reject){
//     let a = 1+1;
//     if(a == 2){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// });

// p.then(function(message){
//     console.log("this is in then " + message);
// }).catch(function(message){
//     console.log("this is in catch " + message);
// });

//promise chaining

// let p = new Promise(function(resolve, reject){
//     let a = 1+1;
//     if(a == 2){
//         resolve("success");
//     }else{
//         reject("failed");
//     }
// });

// p.then(function(message){
//     console.log("this is in then " + message);
//     return "another success";
// }).then(function(message){
//     console.log("this is another then " + message);
// }).catch(function(message){
//     console.log("this is in catch " + message);
// });

