var express = require('express');
const UserModel=require('../../models/UserModel')
const md5=require('md5')
const {secret}=require('../../config/config')
var router = express.Router();
//导入 jwt
const jwt = require('jsonwebtoken');
//登录
router.post('/login',(req,res)=>{
    let {username,password}=req.body
    UserModel.findOne({username,password:md5(password)},(err,data)=>{
        if(err){
            res.json({
                code:'2001',
                msg:'数据库读取失败',
                data:null
            })
            return
        }else if(!data){
            return res.json({
                code:'2002',
                msg:'账号或密码错误',
                data:null
            })
        }
        let token=jwt.sign({
            username:data.username,
            _id:data._id
        },secret,{
            expiresIn:60*60*24*7
        })
        res.json({
            code:'0000',
            msg:'登陆成功',
            data:token
        })
    })
})

//退出登录
router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        return res.render('success',{msg:'退出成功',url:'/login'})
    })
})

module.exports = router;
