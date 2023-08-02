const ejs=require('ejs')
const fs=require('fs')
let name='蛤哈'
let str='我是<%=name%>'
let result=ejs.render(str,{name:name})
let html=fs.readFileSync('./ejs.html').toString()
let result2=ejs.render(html,{name:name})
console.log(result)
console.log(result2)