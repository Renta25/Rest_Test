const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(process.env.MSG || "Nie ustawiono wiadomości")
})

app.listen(port, () => {
  console.log(`REST_GET_TEST -> LISTENING: http://localhost:${port}`)
})