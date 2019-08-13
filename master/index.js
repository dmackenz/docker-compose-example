const express = require('express')
const axios = require('axios')
const app = express()

const port = 5000
app.listen(port, () => {
  console.log("master listening on " + port)
})

setInterval(async () => {
  const res = await axios.get(`http://${process.env.SLAVE_HOST}:${process.env.SLAVE_PORT}`)
  console.log(res.data)
}, 500)