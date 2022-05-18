require('dotenv').config()
require('../mongo')
const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())
const PORT = 3010

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../Client-travel/build'))
}

app.get('/', (req, res) => {
  res.send('<h1>No se encontro, ya sabes</h1>')
})

app.use(morgan('tiny'))
app.use('/api/travel', require('./router/Travel'))

app.get('*', (req, res) => res.sendFile(path.resolve('../Client-travel/build', 'index.html')))

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
