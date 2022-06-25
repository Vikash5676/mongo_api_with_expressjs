const express=require('express')
const show = express.Router()
const {showdata,deleteData,editData}=require('../controllers/showdata')

show.get('/',showdata)

// Edit route first 

show.put("/edit",editData);

// Delete route

show.delete("/delete/:id",deleteData);

module.exports=show