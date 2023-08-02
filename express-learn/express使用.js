const express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')
const recordsAddress=(req,res,next)=>{
    const {url,ip} = req
    res.setHeader('content-type','text/html;charset=utf-8')
    fs.appendFileSync(path.resolve(__dirname,'./address.txt'),`${url} ${ip} \r\n`)
    next()
}
const verdictCode=(req,res,next)=>{
    if(req.query.code=='123'){
        next()
    }else{
        res.end('暗号错误')
    }
}
//给所有路由都加上这个记录日志的中间件
app.use(recordsAddress)
app.get('/home',(req,res)=>{
    console.log(req.query)
    res.end('express')
})
// 获取路由参数
app.get('/:id.html',(req,res)=>{
    console.log(req.params.id)
    res.end('express')
})
app.get('/other',(req,res)=>{
    // res.redirect('https://www.bilibili.com')//重定向
    // res.download(__dirname + '/package.json')//下载文件
    // res.json({"abc":'aaa'})//传递json
    res.sendFile(path.resolve(__dirname,'../table.html'))//返回文件
})
//单独给管理页路由加上code检验的中间件
app.get('/admin',verdictCode,(req,res)=>{
    res.end('管理页面')
})
//处理404
app.all('*',(req,res)=>{
    res.end('404 Not Found')
})
app.listen(9000,()=>{
    console.log('运行在9000端口')
})