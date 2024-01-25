import express from "express"

const router=express.Router();
router.get("/getDetails",(req,res)=>{
console.log("success call api");
})
router.post("/fetchDetails",(req,res)=>{
console.log("success call api");
    
})
export default router;

