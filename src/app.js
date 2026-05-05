const express=require("express");

const app=express();


  app.use("/hello/2",(req,res)=>{
    res.send("edhi rendo edhi ra thammudu")
  })

    app.use("/hello",(req,res)=>{
    res.send("hello people")
  })

  app.get("/user",(req,res)=>{
      
    res.send({
      "firstname":"chinnarao",
      "lastname":"mantri"
    })
      
  })


  app.post("/user",(req,res)=>{
     res.send("successfully deployed post")
  })
     
  //this will match all the http method Api calls to
   app.use("/user",(req,res)=>{
     res.send("hahahahhhhahahah")
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