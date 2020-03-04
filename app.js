const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  if (req.method == 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use(bodyParser.json())

app.get('/api/test', async (req, res) => {
  console.log(req.query)
  return res.json({ data: 'ok' })
})

app.post('/api/test', async (req, res) => {
  console.log(req.query)
  console.log(req.body)
  return res.json({ data: 'ok' })
})

app.listen(9088, () => {
  console.log('Server started on 9088')
})