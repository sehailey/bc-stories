const express = require('express')
const path = require('path')
const app = express()
const volleyball = require('volleyball')
const port = process.env.PORT || 1337

app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('body-parser').text())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname, '/build'))
}
console.log(process.env.NODE_ENV)
app.use('/api', require('./api'))

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
