const express  = require('express')
const app = express()

port = 5000;

app.get('/hello', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})
