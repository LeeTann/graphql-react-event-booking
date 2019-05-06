const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 9001

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Listening on port ${port} `))