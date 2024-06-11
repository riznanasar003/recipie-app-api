const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const {recipiemodel} = require ("./models/recipie")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/recipiedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let recipie = new recipiemodel(input)
    recipie.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    recipiemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.get("/search",(req,res)=>{
    res.send("test")
})

app.get("/delete",(req,res)=>{
    res.send("test")
})

app.listen(8081,()=>{
    console.log("Server Started")
})