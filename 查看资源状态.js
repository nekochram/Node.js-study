const fs=require('fs')
fs.stat('./观书有感.txt',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)
    console.log(data.isFile())//是否是文件
    console.log(data.isDirectory())//是否是文件夹
})