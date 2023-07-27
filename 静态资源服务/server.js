const http=require('http')
const path=require('path')
const fs=require('fs')
const server=http.createServer((request,response)=>{
    response.end()
})
server.listen(9000,()=>{
    console.log('运行在9000端口')
})