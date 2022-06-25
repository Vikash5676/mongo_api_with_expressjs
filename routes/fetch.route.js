const express=require('express')
const fetch = express.Router()
const fetchdata=require('../controllers/fetchdata')

fetch.post('/fetch',fetchdata)

module.exports=fetch