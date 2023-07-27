const http=require('http')
const fs=require('fs')
const server=http.createServer((request,response)=>{
    let {pathname}=new URL(request.url,'http://127.0.0.1:9000')
    if(pathname=='/'){
        let data=fs.readFileSync(__dirname + '/table.html')
        response.end(data)
    }else if(pathname=='/table.css'){
        let data=fs.readFileSync(__dirname + '/table.css')
        response.end(data)
    }else if(pathname=='/table.js'){
        let data=fs.readFileSync(__dirname + '/table.js')
        response.end(data)
    }else{
        response.statusCode=404
        response.end('<h1>404</h1>')
    }
}).listen(9000,()=>{
    console.log('运行在9000端口')
})