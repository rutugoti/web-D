let msg = "             holo ";
console.log(msg.trim()); // "holo"

msg.toLocaleLowerCase();
msg.toUpperCase();

msg.indexOf("o"); // 1
msg.lastIndexOf("o"); // 4

msg.slice(1, 4); // "olo"
msg.substring(1, 4); // "olo"

msg.toUpperCase.trim(); // "HOLO"
msg.slice(1, 4).toUpperCase(); // "OLO"

//array

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[0]); // 1
console.log(arr[4]); // 5

//reverse and concate

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]
console.log(arr3);

arr3.reverse(); // [6, 5, 4, 3, 2, 1]
console.log(arr3);

//slice

let arr4 = arr3.slice(1, 4); // [5, 4, 3]
console.log(arr4);

//splice

arr3.splice(1, 2); // [6, 3, 2, 1]
console.log(arr3);

arr3.splice(1, 0, 5, 4); // [6, 5, 4, 3, 2, 1]
console.log(arr3);

//splice

arr3.splice(1, 2, 7, 8); // [6, 7, 8, 3, 2, 1]
console.log(arr3);  

//sort

arr3.sort(); // [1, 2, 3, 6, 7, 8]
console.log(arr3);

arr3.sort((a, b) => a - b); // [1, 2, 3, 6, 7, 8]
console.log(arr3);


