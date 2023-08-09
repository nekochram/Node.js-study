const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/local')
mongoose.set('strictQuery', false)
mongoose.connection.once('open',()=>{
    console.log('连接成功')
})
mongoose.connection.on('error',()=>{
    console.log('连接失败')
})
mongoose.connection.on('close',()=>{
    console.log('连接关闭')
})

setTimeout(()=>{
    mongoose.disconnect()
},3000)