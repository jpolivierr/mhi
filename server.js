const express = require('express')
const app = express()
const PORT = process.env.port || 5000
const log = console.log

app.listen(PORT, ()=> log(`---------running on PORT ${PORT}`))