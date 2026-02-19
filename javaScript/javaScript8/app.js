let arr = [1,2,3,4,5,6];

let print = function (x) {
    console.log(x);
}

arr.forEach(print);

//map

let num = [1,2,3,4,5,6];

let double = num.map(function (x) {
    return x*2;
});

console.log(double);

//filter

let even = num.filter(function (x) {
    return x%2 === 0;
});

console.log(even);

//every

let allEven = num.every(function (x) {
    return x%2 === 0;
});

console.log(allEven);

//some

let someEven = num.some(function (x) {
    return x%2 === 0;
});

console.log(someEven);

//reduce

let sum = num.reduce(function (acc, x) {
    return acc + x;
}, 0);

console.log(sum);

//find max with reduce in array

let max = num.reduce(function (acc, x) {
    return acc > x ? acc : x;
}, -Infinity);

console.log(max);

//defualt parameter

function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet(); // Hello, Guest
greet("Alice"); // Hello, Alice

//rest parameter

function sumAll(...numbers) {
    return numbers.reduce(function (acc, x) {
        return acc + x;
    }, 0);
}

console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(4, 5)); // 9

//spread with litrels

let  arr1 = [1, 2, 3];

let newArr = [...arr, 4, 5];

console.log(newArr); // [1, 2, 3, 4, 5]

//spread with objects

let obj1 = { a: 1, b: 2 };

let obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }

//destructuring

let [first, second] = arr;

console.log(first); // 1
console.log(second); // 2

let { a, b } = obj1;

console.log(a); // 1
console.log(b); // 2    

//rest

let [head, ...tail] = arr;

console.log(head); // 1
console.log(tail); // [2, 3, 4, 5, 6]

let { a: x, ...rest } = obj1;

console.log(x); // 1
console.log(rest); // { b: 2 }  

//destructuring with default values

let [p = 10, q = 20] = [5];

console.log(p); // 5
console.log(q); // 20

let { a: m = 100, b: n = 200 } = { a: 50 };

console.log(m); // 50
console.log(n); // 200  