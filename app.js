// app.js
// include packages used in this project
const express = require('express')
const exphbs = require('express-handlebars')
const generate_password = require('./generate_password')
// define server related variables
const app = express()
const port = 3000



// set template engine
app.engine('handlebars' , exphbs({defaultLayout : 'main'}))
app.set('view engine' , 'handlebars') 

// set static file
app.use(express.static('public'))


// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generate_password(options)
  res.render('index', { password : password, options : options})
})

// starts the express server and listening for connections.
app.listen(3000 , () =>{
  console.log(`Express server listening on http://localhost:${port} `)
})

