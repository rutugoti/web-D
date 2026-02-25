const express = require("express");

const app = express();

console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app listening on port${3000}`);
})


app.use((req,res)=>{
    console.log("req recieved");//

    res.send("server running");
})