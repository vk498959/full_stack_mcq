const express=require("express")
const mongoose=require("mongoose")
const Question=require("./controller/Question.js")
mongoose.connect("mongodb://127.0.0.1:27017/mcq").then(e=>{
    console.log("Connected Successfully")
}).catch(e=>{
    console.log("error: "+e)
})


const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/public",express.static(__dirname+"/public"));
app.use("/api",Question)
app.get("/",(req,res)=>{
    res.redirect("/public/dashboard.html")
})

app.listen(8000,(req,res)=>{
    console.log("Server is running on port 8000")
})