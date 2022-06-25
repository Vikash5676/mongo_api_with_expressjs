const express=require('express')
const cors= require('cors')
const app= express()
const show= require('./routes/show.route')
const fetch= require('./routes/fetch.route')

app.use(express.json());
app.use(cors())

app.use('/',show,fetch)

module.exports=app