const http=require('http')
const server=http.createServer((request,response)=>{
    //设置状态码
    response.statusCode=203
    //设置状态码后的描述信息
    response.statusMessage='eee'
    //设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    //设置多个相同响应头
    response.setHeader('dd',[1,2,3])
    //设置响应体
    response.write('123')
    response.end()
})
server.listen(9000,()=>{
    console.log('运行在9000端口')
})