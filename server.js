const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
port = 5000;

app.use(cors())
app.use(express.json())

app.post('/api/signup', (req, res) => {
    console.log(req.body)
    res.json({ status : 'ok' })
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
