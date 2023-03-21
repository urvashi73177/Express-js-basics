//The callback function has two parameters - req and res
//The request object represents the http request and has the propertie for request queries strings , parameters and body 
//The response object represents the http responsde that an express app sends when it recieves the request

// 1) MAKE A ROUTE TO YOUR HOME PAGE
//2) MAKE A ROUTE TO YOUR ABOUT PAGE
//3) Make a EOUTE TO YOUR CONTATCT US PAGE

const express = require('express');
const app = express();
port = 8000
app.get("/",(req,res)=>{
    res.send ("Hello, welcome to the home page!");
})
app.get("/about",(req,res)=>{
    res.status(200).res.send("Hello this is an about page")
})
app.listen(port, ()=>{
    console.log(`listening on the ${port}`)
})


