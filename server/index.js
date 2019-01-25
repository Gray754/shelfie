require('dotenv'),config()
const express =  require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
// const controller = require('./controller)

app.use(json())

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>{
    console.log(err)
})

// app.get()
// app.post()
// app.put()
// app.delete()


port = 3001
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})