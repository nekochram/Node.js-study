const http=require('http')
const url=require('url')
const server=http.createServer((request,response)=>{
    //第一种方法
    // let obj=url.parse(request.url,true)
    // console.log(obj)
    //第二种方法
    console.log(request.url)
    let url=new URL(request.url,'http:127.0.0.1:9000')//第二个参数随便写，只是为了拼成完整url
    console.log(url.searchParams.get(keyword))
    response.end('url')
})
server.listen(9000,()=>{
    console.log('运行在9000端口')
})