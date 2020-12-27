// this hosts the Endpoint for creating and reading the users

// import the Router Function
const router = require('express').Router()

// import the Model User
const User = require('../models/User')


// We create an Endpoint for creating a new user
// taking the data from the Body of the request
router.post('/new', async(req, res) => {
    // we get the new tweets from the body of the post message
    const data = req.body

    try{
        // insert the data from the body to the Tweet Model 
        const response = await User.insertMany(data)
        // then return the id of the new created user
        res.json({newId: response._id})
    }
    catch(err){
        res.json({error: err})
    }
})


// Endpoint that takes the ID of the user from the URL and returns its data 
router.get('/:id', async(req, res) => {
    // we get the new user from the params of the get message
    const id = req.params.id

    try{

        const response = await User.findById(id)
        // then return the id of the new created user
        res.json({newId: response})
    }
    catch(err){
        res.json({error: err})
    }
})


// export this router for importing it in the app.js file
module.exports = router