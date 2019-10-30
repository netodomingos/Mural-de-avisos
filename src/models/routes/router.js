const express = require('express')
const bodyParser = require('body-parser')
const posts = require('../posts')

const server = express()


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