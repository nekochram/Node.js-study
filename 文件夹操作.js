const fs=require('fs')
//创建单个文件夹
// fs.mkdir('./html',err=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })
//创建多个文件夹
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })
//读取文件夹
// fs.readdir('./资料',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
//删除单个文件夹
fs.rmdir('./html',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('删除成功')
})
//递归删除
fs.rm('./a',{recursive:true},err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('删除成功')
})