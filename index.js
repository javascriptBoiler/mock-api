const express = require('express')
const cors = require('cors')
const userPath = require('./api/user')
const productPath = require('./api/product')

require('dotenv').config()
const app = express()

app.use(cors())

// user
app.use(`${process.env.BASE_PATH}/user`, userPath)
app.use(`${process.env.BASE_PATH}/product`, productPath)


app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
})