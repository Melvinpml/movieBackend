const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const movieRoute = require("./controller/movieRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://melvinpoulose06:melvinpml4151@cluster0.yshbagz.mongodb.net/movieDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/movie", movieRoute)

app.listen(3001,()=>{
    console.log("running")
})