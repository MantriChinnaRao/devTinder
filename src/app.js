const express=require("express");

const app=express();

 app.use("/",(req,res)=>{
    res.send("bokka laga")
  })

  app.use("/testt",(req,res)=>{
     res.send("test the elements");
  })

  app.use("/live",(req,res)=>{
    res.send("live your application");
  })



app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777....");
});