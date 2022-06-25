const User=require("../model/User");


const fetchdata=(req,res)=>{

    
    
    
    
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        
        
    
    })
    
    user.save().then(data=>{
    
        res.json({
            message:"User data saved",
            data:data
    
        })
          
     
      
      
        
        }).catch(err=>{
            
            res.json({
            message:err,
            
        })
             
      
          
      
        })

    }

    module.exports= fetchdata