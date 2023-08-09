const mongoose =require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
mongoose.set('strictQuery', false)
mongoose.connection.once('open',()=>{
    let BookSchema=new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    })
    let BookModel=mongoose.model('novels',BookSchema)
    BookModel.deleteOne({_id:'64d1e2932a7a0477abefc629'},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    BookModel.deleteMany({is_hot:false},(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
})
mongoose.connection.on('error',()=>{
    console.log('连接失败')
})
mongoose.connection.on('close',()=>{
    console.log('连接关闭')
})