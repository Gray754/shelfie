require('dotenv').config()
const express =  require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
const {getDb, postProduct} = require('./controller')

app.use(json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    console.log(dbInstance)
    app.set('db', dbInstance)
}).catch(err=>{
    console.log(err)
})

app.get('/api/inventory', getDb)
// app.post('/api/product', postProduct)
// app.put()
// app.delete()


port = 3001
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})