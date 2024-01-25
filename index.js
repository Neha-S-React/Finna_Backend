import "./MongoDBconnection.js"
import express from "express"
import initalize from "./index.routes.js"
const app=express();
app.use(express.json({}));
initalize(app)
app.listen(8800,(req,resp)=>{
console.log(req);
    console.log('====================================');
    console.log("server running on port : 8800");
    console.log('====================================');
})

