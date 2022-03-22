import express from 'express'

const app = express()

app.get('/', function(_, res) {
  res.send('hello monorepo')
})

app.listen(6666)
