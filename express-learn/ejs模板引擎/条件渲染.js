const ejs=require('ejs')
let loginStatus=false
let str=`
    <% if(loginStatus){ %>
        <span>已登录</span>
    <%}else{%>
        <span>未登录</span>
    <%}%>
`
let result=ejs.render(str,{loginStatus:loginStatus})
console.log(result)