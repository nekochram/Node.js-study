const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
mongoose.set('strictQuery', false)
mongoose.connection.once('open',()=>{
    let BookSchema=new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    })
    let BookModel=mongoose.model('books',BookSchema)
    BookModel.create({
        name:'知更鸟',
        author:'未知',
        price:123
    },(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data)
    })
})
mongoose.connection.on('error',()=>{
    console.log('连接失败')
})
mongoose.connection.on('close',()=>{
    console.log('连接关闭')
})