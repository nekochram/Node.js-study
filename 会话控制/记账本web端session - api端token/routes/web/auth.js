var express = require('express');
const UserModel=require('../../models/UserModel')
const md5=require('md5')
var router = express.Router();

//返回注册页
router.get('/reg',(req,res)=>{
    res.render('auth/reg')
})

//注册
router.post('/reg',(req,res)=>{
    UserModel.create({...req.body,password:md5(req.body.password)},(err,data)=>{
        if(err){
            res.status(500).send('注册失败')
            return
        }
        res.render('success',{msg:'注册成功',url:'/login'})
    })
})

//登陆页面
router.get('/login',(req,res)=>{
    res.render('auth/login')
})

//登录
router.post('/login',(req,res)=>{
    let {username,password}=req.body
    UserModel.findOne({username,password:md5(password)},(err,data)=>{
        if(err){
            res.status(500).send('登录失败')
            return
        }else if(!data){
            return res.send('账号或密码错误')
        }
        req.session.username = data.username;
        req.session._id = data._id;
        res.render('success',{msg:'登陆成功',url:'/account'})
    })
})

//退出登录
router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        return res.render('success',{msg:'退出成功',url:'/login'})
    })
})

module.exports = router;
