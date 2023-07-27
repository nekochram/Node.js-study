const fs=require('fs')
const process=require('process')
//readFileSync实现
// const data=fs.readFileSync('./观书有感.txt')
// fs.writeFileSync('./观书有感-copy.txt',data)
// console.log(process.memoryUsage())
//流式读写
const rs=fs.createReadStream('./观书有感.txt')
const ws=fs.createWriteStream('./观书有感-copy.txt')
// rs.on('data',chunk=>{
//     ws.write(chunk)
// })
// rs.on('end',()=>{
//     ws.close()
//     console.log(process.memoryUsage())
// })
//流式读写便捷写法
rs.pipe(ws)