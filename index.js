require('dotenv').config();
const port = process.env.SERVER_PORT;

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))