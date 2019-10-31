const express = require('express')
const bodyParser = require('body-parser')
const posts = require('../posts')
const cors = require('cors')
const server = express()

const options = {
    origin: 'http://localhost:3333'
}
server.use(cors(options))

server.get('/all', (request, response) => {
    response.json(JSON.stringify(posts.getAll()))
})

server.post('/new', bodyParser.json(), (request, response) => {

    const title = request.body.title
    const description = request.body.description

    posts.newPost(title, description)

    response.send('Post Adicionado!')

})
module.exports = server