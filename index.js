const  express = require('express')
const  mongoose = require('mongoose')
const  url  = "mongodb://localhost/vj"

const app=express()
mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('connected');
})
app.use(express.json())
const  apiroutes=require('./routers/apirouter')
app.use('/users',apiroutes)

app.listen(3000,()=>{
    console.log('server started');
})