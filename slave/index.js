const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ success: 200 })
})

const port = 5000
app.listen(port, () => {
  console.log("slave listening on " + port)
})