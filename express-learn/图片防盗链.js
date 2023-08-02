const express = require("express");
const app = express();
const port = 9000;
app.use((req,res,next)=>{
    const referer=req.get('Referer')
    if(referer){
        let url=new URL(referer)
        if(url.hostname!='127.0.0.1'){
            res.status(404).end('错误')
            return
        }
    }
    next()
})
app.use(express.static(__dirname + '/public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
