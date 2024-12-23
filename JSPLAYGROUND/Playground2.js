const express = require("express");
const app = express();
app.use(express.json());
let todo=[];
app.get('/',(req,res)=>{
    res.send("<h1>hi there!</h1>");
})

app.get('/todo',(req,res)=>{
    res.json(todo);
})

app.post('/todos',(req,res)=>{
    console.log(req.body);
})


app.listen(3001);