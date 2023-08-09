module.exports=function(success,error=()=>{console.log('连接失败')}){
    const mongoose =require('mongoose')
    const {DBIP,DBHOST,DBNAME}=require('../config/config')
    mongoose.set('strictQuery', true)
    mongoose.connect(`mongodb://${DBIP}:${DBHOST}/${DBNAME}`)
    mongoose.connection.once('open',()=>{
        success()
    })
    mongoose.connection.on('error',()=>{
        error()
    })
    mongoose.connection.on('close',()=>{
        console.log('连接关闭')
    })
}