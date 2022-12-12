const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes')
const mongoose = require('mongoose')

//middleware 
app.use(express.json());

//router for user api 
app.use("/user",userRouter)

//connect mongoDb database
mongoose.connect('mongodb://localhost:27017/signup-login')
.then(()=>{
    app.listen(5000,()=>{
        console.log('server started on port no. 5000')
    })
})
.catch((error)=>{
    console.log(error)
})

