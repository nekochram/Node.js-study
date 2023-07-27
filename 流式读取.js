const fs=require('fs')
const rs=fs.createReadStream('./座右铭.txt')
rs.on('data',chunk=>{
    console.log(chunk)
})
rs.on('end',()=>{
    console.log('读取完成')
})