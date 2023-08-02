const express=require('express')
const router=express()
router.get('/admin1',(req,res)=>{
    res.end('admin1')
})
router.get('/admin2',(req,res)=>{
    res.end('admin2')
})
module.exports=router