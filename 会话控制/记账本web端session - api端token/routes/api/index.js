var express = require('express');
var router = express.Router();
const AccountModel=require('../../models/AccountModel')
const moment=require('moment')
const checkToken=require('../../middlewares/checkToken')
//账单记录
router.get('/account',checkToken, function(req, res, next) {
	AccountModel.find().sort({time:-1}).exec((err,data)=>{
        if(err){
            res.json({
                code:'1001',
                msg:'读取失败',
                data:null
            })
            return
        }
        res.json({
            code:'0000',
            msg:'读取成功',
            data:data
        })
    })
});
//添加记录
router.post('/account',checkToken,function(req,res,next){
	AccountModel.create({
        ...req.body,
        time:moment(req.body.time).toDate()
    },(err,data)=>{
        if(err){
            res.json({
                code:'1002',
                msg:'插入失败',
                data:null
            })
            return
        }
        res.json({
            code:'0000',
            msg:'添加成功',
            data:data
        })
    })
})
//删除记录
router.delete('/account/:id',checkToken,function(req,res,next){
	let id=req.params.id
	AccountModel.deleteOne({_id:id},(err,data)=>{
        if(err){
            res.json({
                code:'1003',
                msg:'删除失败',
                data:null
            })
            return
        }
        res.json({
            code:'0000',
            msg:'删除成功',
            data:{}
        })
    })
})

//获取单个账单
router.get('/account/:id',checkToken,function(req,res,next){
    let id=req.params.id
    AccountModel.findById(id,(err,data)=>{
        if(err){
            return res.json({
                code:'1004',
                msg:'查询失败',
                data:null
            })
        }
        res.json({
            code:'0000',
            msg:'查询成功',
            data:data
        })
    })
})

//更新单个账单
router.patch('/account/:id',checkToken,function(req,res,next){
    let id=req.params.id
    AccountModel.updateOne({_id:id},req.body,(err,data)=>{
        if(err){
            return res.json({
                code:'1005',
                msg:'更新失败',
                data:null
            })
        }
        AccountModel.findById(id,(err,data)=>{
            if(err){
                return res.json({
                    code:'1004',
                    msg:'查询失败',
                    data:null
                })
            }
            res.json({
                code:'0000',
                msg:'更新成功',
                data:data
            })
        })
    })
})

module.exports = router;
