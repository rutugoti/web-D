function hello(){
    console.log("Hello World");
}

hello();

function printPoem(){
    console.log("Twinkal twinkal litle star");
    console.log("How I wonder what you are");

}

printPoem();


function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1; 
    console.log(randomNumber);  

}

rollDice();

//function with arguments

function greet(name){
    console.log("Hello " + name);
}

greet("Alice");
greet("Bob");

//function with return value

function add(a, b){
    return a + b;
}

let sum = add(5, 3);
console.log(sum);

//avg of 3 numbers

function average(x, y, z){
    return (x + y + z) / 3;
}

let avg = average(10, 20, 30);
console.log(avg);

//scope of variables

function testScope(){
    let localVar = "I am local";
    console.log(localVar);
}

testScope();
// console.log(localVar); // This will cause an error because localVar is not defined outside the function

//method vs function    

let person = {
    name: "John",
    greet: function(){
        console.log("Hello, I am " + this.name);
    }
};

person.greet(); // This is a method because it is a function that is a property of an object    

