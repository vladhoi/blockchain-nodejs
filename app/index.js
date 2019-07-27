const express = require('express')
const bodyParser = require('body-parser')
const Blockchain = require('../blockchain')

const app = express()
const HTTP_PORT = process.env.HTTP_PORT || 3001

const blockchain = new Blockchain()

app.use(bodyParser.json())

app.get('/blocks', (req, res) => {
    res.json(blockchain.chain)
})

app.post('/mine', (req, res) => {
    const block = blockchain.addBlock(req.body.data)
    console.log(`New block added: ${block.toString()}`)
    res.redirect(' /blocks')
})

app.listen(HTTP_PORT, () => console.log(`Example app listening on port ${HTTP_PORT} !`))