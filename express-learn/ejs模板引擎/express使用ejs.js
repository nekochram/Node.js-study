const express = require('express')
const path=require('path')
const app = express()
const port = 9000
//1.设置模板引擎
app.set('view engine','ejs')
//2.设置模板文件存放位置
app.set('views',path.resolve(__dirname,'./views'))
app.get('/home', (req, res) =>{
    let name='蛤哈'
    //3.render响应render('模板文件名','数据')
    res.render('home',{name:name})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))