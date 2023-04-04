const express = require('express')
const app = express()
const port = Number(process.env.PORT)

app.get('/', (req, res) => {
  res.send(`Hello World! SERVICE_NAME=${process.env.SERVICE_NAME}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})