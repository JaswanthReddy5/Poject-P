const Data = require("express");
const app = Data();


app.get('/',(req,res)=>{
    console.log("requested");
    console.log(req.body);
    res.send("<h1>hi there!</h1>");
})
app.get('/home',(req,res)=>{
    app.send("welcome to home")
})
app.get('/content',(req,res)=>{
    res.json({
        message:"Done",
        Success:true
    })
})

app.listen(3000)
