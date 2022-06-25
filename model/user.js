const mongoose=require("mongoose");

const Userschema=new mongoose.Schema({

    name:{
        type:String,
        
    },
    email:{
        type:String,
        unique:true
        
    },

  

},{
    timestamps: true
})

module.exports=mongoose.model("database",Userschema);