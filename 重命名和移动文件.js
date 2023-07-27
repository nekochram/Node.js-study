const fs=require('fs')
//异步
fs.rename('./观书有感-copy.txt','./资料/观书有感.txt',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('重命名并移动')
})
//同步
// fs.renameSync('./观书有感-copy.txt','./资料/观书有感.txt')