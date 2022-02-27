const express = require("express");
const cors= require("cors");
const router=require("./routes");
const port = process.env.PORT || 8000;

const app=express();

app.use(cors());
app.use("/api/v1",router);

// app.get('/blog',function(request,response){
//     response.send("hello route");
// })

app.listen( port , function(res,err){
    console.log("application has started");
})
