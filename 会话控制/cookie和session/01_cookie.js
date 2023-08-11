const express = require('express')
const app = express()
const port = 3000

app.get('/set-cookie', (req, res) => {
    res.cookie('name','zhangsan',{maxAge:30*1000})
    res.send('home')
})
//删除cookie
app.get('/remove-cookie',(req,res)=>{
    res.clearCookie('name')
    res.send('删除成功')
})
//获取cookies
app.get('/get-cookie',(req,res)=>{
    console.log(req.headers.cookie)
    res.send('获取成功')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
