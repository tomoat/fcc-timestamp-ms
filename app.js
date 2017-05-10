const express = require("express")
const moment = require("moment")
const path = require("path")

const app = express()
const port = process.env.PORT || 8080

app.listen(port, console.log('Listening on port: ' + port))

app.get('/', (req, res) => {
  const fileName = path.join(__dirname, 'index.html')
  res.sendFile(fileName, err => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    } else {
      console.log('Send ', fileName)
    }
  })
})

app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp
  let dateStr
  if(isNaN(parseInt(timestamp))) {
    dateStr = moment(timestamp, 'X')
  }else{
    dateStr = moment(timestamp, 'MMMM D, YYYY')
  }
  
  if(dateStr.isValid()) {
    res.json({
      unix: dateStr.format('X'),
      natural: dateStr.format('MMMM D, YYYY')
    })
  }else{
    res.json({
      unix: null,
      natural: null
    })
  }
})