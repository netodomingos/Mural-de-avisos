const express = require('express')
const path = require('path')
const routes = require('./models/routes/router')

const port = 3333

const server = express()

server.use('/api', routes)
server.use('/', express.static(path.join(__dirname, '../public')))



server.listen(port, () => {
    console.log(`server Running On Port ${port} `)
})

