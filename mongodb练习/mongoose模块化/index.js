const db=require('./db/db')
const BookModel=require('./models/BookModel')
db(()=>{
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