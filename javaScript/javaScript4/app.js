let todo = [];

let req = prompt("Enter your request:"); 

while(true){
   if(req === "quit"){
    console.log("Goodbye!");
       break;
   }

   if(req === "list"){
    console.log("**********");
    for(let i = 0; i < todo.length; i++){
        console.log(i + ": " + todo[i]);
    }
    console.log("**********");
   }else if(req === "add"){
        let task = prompt("Enter the task you want to add:");
        todo.push(task);
        console.log("Task added successfully!");
   }else if(req === "delete"){
        let index = prompt("Enter the index of the task you want to delete:");
        todo.splice(index, 1);
        console.log("Task deleted successfully!");
   }else{
        console.log("Invalid request!");
   }
   req = prompt("Enter your request:"); 
}