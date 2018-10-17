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
app.use('/api', require('./api'))

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('../client/build', 'index.html'))
  )
}

if (process.env.NODE_ENV === 'dev') {
  app.use(express.static('../client/public'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('../client/public', 'index.html'))
  )
}

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => console.log(`Doin' haxor stuff on port ${port}`))
