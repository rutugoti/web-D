//this keyword

const student = {
    name: "John",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

student.greet(); // Output: Hello, my name is John

// In the greet method, 'this' refers to the student object, allowing us to access the name property.

//try and catch

try {
    console.log("This is a try block.");
    // You can throw an error to test the catch block
    // throw new Error("Something went wrong!");
} catch (error) {
    console.error("An error occurred: " + error.message);
    
}

//arrow functions

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

// Arrow functions provide a concise syntax for writing functions and do not have their own 'this' context.

//implicit return

const multiply = (a, b) => a * b;

console.log(multiply(4, 6)); // Output: 24

// In this example, the arrow function has an implicit return, meaning it returns the result of the expression without needing a return statement.  

//set timeout

setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

// The setTimeout function is used to execute a function after a specified delay (in milliseconds). In this case, the message will be logged to the console after 2 seconds.

//set interval

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log("Count: " + count);
    if (count >= 5) {
        clearInterval(intervalId); // Stop the interval after 5 counts
    }
}, 1000);

// The setInterval function is used to execute a function repeatedly at specified intervals (in milliseconds). In this example, the count will be logged every second, and the interval will stop after reaching 5.