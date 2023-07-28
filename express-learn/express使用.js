const express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')
const recordsAddress=(req,res,next)=>{
    const {url,ip} = req
    fs.appendFileSync(path.resolve(__dirname,'./address.txt'),`${url} ${ip} \r\n`)
    next()
}
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
//处理404
app.all('*',(req,res)=>{
    res.end('404 Not Found')
})
app.listen(9000,()=>{
    console.log('运行在9000端口')
})