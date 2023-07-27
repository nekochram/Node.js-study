const fs=require('fs')
//异步方法unlink 同步方法unlinkSync
fs.unlink('./观书有感-copy.txt',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('删除成功')
})
//异步方法rm 同步方法rmSync
fs.rm('./观书有感-copy.txt',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('删除成功')
})