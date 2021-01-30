const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.port || 3001
const log = console.log

// Init Middleware
app.use(express.json({extended: false}))
app.use(cors())

app.use(express.static(path.join(__dirname, "client/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


app.listen(PORT, ()=> log(`---------running on PORT ${PORT}`))