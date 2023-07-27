const http=require('http')
const server= http.createServer((request,response)=>{
    let {method}=request
    let url=new URL(request.url,'https://127.0.0.1:9000')
    let {pathname}=url
    response.setHeader('content-type','text/html;charset=utf-8')
    if(method=='GET'&&pathname=='/login'){
        response.end('登录页')
    }else if(method=='GET'&&pathname=='/reg'){
        response.end('注册页')
    }else{
        response.end('404')
    }
})
server.listen(9000,()=>{
    console.log('运行在9000端口')
})