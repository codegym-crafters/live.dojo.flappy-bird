const express = require('express')
const app = express()
app.use(express.static(__dirname + '/build/dist'))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
