const express = require("express");

const app = express();

const port = 5000;

app.use(express.urlencoded({extended:true}));

app.use(express.json);

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`get res user welcome${user}  `);
})

app.post("/register",(req,res)=>{
      let {user,password}=req.body;
    res.send("post response");
})


app.listen(port,()=>{
    console.log(`listing on the port ${port}`);
})