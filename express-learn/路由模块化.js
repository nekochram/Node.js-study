const express = require('express')
const app = express()
const port = 9000
const adminRouter=require('./routes/adminRouter')
app.use(adminRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.get('*', (req, res) => res.send('404'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))