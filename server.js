require('dotenv').config()
const app =require("./app")
const port=process.env.PORT||5050
const dbConnect=require('./db')

dbConnect(process.env.MONGO_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`db is connected and server is running at port: ${port}`)
    })
}).catch(err=>{
    console.log(err)
})