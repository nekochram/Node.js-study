var express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)
const shortid=require('shortid')
//账单记录
router.get('/account', function(req, res, next) {
	let data=db.get('account').value()
  res.render('account',{data})
});
//添加记录页面
router.get('/account/create', function(req, res, next) {
	res.render('create')
});
//添加记录
router.post('/account',function(req,res,next){
	db.get('account')
  .push({ id: shortid.generate(),...req.body})
  .write()
	res.render('success',{msg:'添加成功',url:'/account'})
})
//删除记录
router.get('/account/:id',function(req,res,next){
	let id=req.params.id
	db.get('account').remove({id:id}).write()
	res.render('success',{msg:'删除成功',url:'/account'})
})

module.exports = router;
