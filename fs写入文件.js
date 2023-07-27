const fs=require('fs')
//异步写入
fs.writeFile('./座右铭.txt','三人行必有我师',err=>{
    if(err){
        console.log(err)
    }else{
        console.log('写入成功')
    }
})
//同步写入
fs.writeFileSync('./同步写入.txt','测试同步写入')