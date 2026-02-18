// const post = {
//     username:"jone doe",
//     content:"this is the post content",
//     likes :200,
//     repost:30,
//     tages:["#javascript","#webdev","#programming"]
// }

// //object of objects
// const user = {  
//     name:"john doe",
//     age:30,
//     email:"j@gamil.com",
//     address:{
//         street:"123 main st",
//         city:"new york",
//         state:"NY",
//         zip:"10001"
//     }   
// }

// //array of objects
// const posts = [
//     {
//         username:"jone doe",
//         content:"this is the post content",
//         likes :200,
//         repost:30,
//         tages:["#javascript","#webdev","#programming"]
//     },
//     {
//         username:"jane doe",
//         content:"this is another post content",
//         likes :150,
//         repost:20,
//         tages:["#html","#css","#webdev"]
//     }
// ]

// console.log(post);
// console.log(user);
// console.log(posts);

const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess = "quit"){
        console.log("you quit the game");
        break;

    }

    if(guess == random){
        console.log("you win");
        break;
    }else if(guess < random){
        console.log("too low");
    }else{
        console.log("too high");
    }

    guess = prompt("guess the number");
}