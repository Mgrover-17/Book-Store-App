const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors')
const app = express()
const db=require("./middlewares/db")

//Middlewares
app.use(express.json()); //convert all middlewares to json
app.use(cors());
app.use('/books',router);
db.connectToDb();

app.listen(5000,()=>{
    console.log("Server is started on 5000")
})
