const http=require('http')
const server=http.createServer((request,response)=>{
    response.end('Hello http')
})
server.listen(9000,()=>{
    console.log('端口为9000')
})