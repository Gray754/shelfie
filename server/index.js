require('dotenv').config()
const express =  require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
const {getDb, postProduct, deleteProduct, updateProduct} = require('./controller')

app.use(json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    // console.log(dbInstance)
    app.set('db', dbInstance)
}).catch(err=>{
    console.log(err)
})

app.get('/api/inventory', getDb)
app.post('/api/product', postProduct)
app.delete('/api/product/:id', deleteProduct)
app.put('/api/product/:id', updateProduct)


port = 3001
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})