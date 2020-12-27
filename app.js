// importing node express server
const express = require('express')

// Initialise body-parser for parsing the body of the requests
const bodyParser = require( 'body-parser')

// import monogoose
const mongoose = require('mongoose')

// import the API for the Creating and Reading tweets from the Model DB
const tweet = require('./api/tweet')

// import the API for the Creating and Reading Users from the Model DB
const user = require('./api/user')

// Initialize the Server
const app = express()

// Tell server to Listen us in port 3000
app.listen(3000)


// use the parser and access the body with { req.body }
app.use(bodyParser.json())

// putting the API to be used by the Server
// the  /tweet/  ensures that each end point in the tweet file is precede by /tweet/
// so this endpoint will be reached by /tweet/new/
app.use('/tweet', tweet)

app.use('/user', user)

// connect to db named 'twiter' in position 'localhost'
mongoose.connect('mongodb://localhost/twiter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

// tell to Server what to do when a user executes the GET request 
// on the PATH of the first paramater  '/'
// the 2nd parameters '(req, res)' if a functions that contains the request & response input parameters
app.get('/', (req, res) => {
    res.send('This is the response from Root folder  { / } ')
})

app.get('/test', (req, res) => {
    res.send('This is the path of the TEST folder')
})

// create a post method for sent data to the server including them in the URL
// Then the server returns back to the user the data that he send
// As params here is the keyword 'username'
app.post('/getUserBy/:username', (req, res) => {
    res.send(req.params.username)
    // if sent in Postman localhost:3000/getUserBy/MyUserName
    // we get back: MyUserName
})

// Accessing the body of a request by parsing it and use req.body
app.post('/getUserBy/:username', (req, res) => {
    res.send(req.body)
    // if we sent in Postman localhost:3000/getUserBy/MyUserName 
    // And put in BODY section with JSON the data
    // {
    //      "firstName": "lampros"
    //      "lastName": "Vatsilidis"
    // }
    // we get back the same JSON that we sent in the body
})


// another way to get response is through the request body  which is just a JSON 
// because Express does not parse the body, we install a parser here with command
// npm install body-parser


