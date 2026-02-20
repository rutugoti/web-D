// //async

// async function getData() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data);
// }

// getData();

// //await is used to wait for a promise to resolve or reject before moving on to the next line of code. It can only be used inside an async function. When the await keyword is encountered, the function execution is paused until the promise is settled (either resolved or rejected). Once the promise is settled, the function resumes execution and returns the resolved value or throws an error if the promise was rejected. This allows for writing asynchronous code in a more synchronous and readable manner.


// //use try and catch to handle errors in async functions

// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//     }
// }

// getData();  

let url= "https://catfact.ninja/fact";

// fetch(url)
//     .then(function (response) {
//         console.log("response received");
//         return response.json();
//     })
//     .then(function (data) {
//         console.log("data received");
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.error("Error fetching data:", error);
//     });


async function getCatFact() {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

getCatFact();