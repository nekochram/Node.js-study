const ejs=require('ejs')
let arr=['张三','李四','李明']
let str=`<ul>
           <% arr.forEach(element => {%>
            <li><%=element%></li>
           <% }) %>
        </ul>`
let result=ejs.render(str,{arr:arr})
console.log(result)