// This  file hosting the Endpoints concerning tweets


// import the Router Function
const router = require('express').Router()

// import the Model Tweet
const Tweet = require('../models/Tweet')


// We create an Endpoint for creating a new Tweet
// taking the data from the Body of the request
router.post('/new', async(req, res) => {
    // we get the new tweets from the body of the post message
    const data = req.body

    try{
        // insert the data from the body to the Tweet Model 
        const response = await Tweet.insertMany(data)
        // then return the id of the new created tweet
        res.json({newId: response._id})
    }
    catch(err){
        res.json({error: err})
    }
})


// Endpoint that takes the ID of the tweet from the URL and returns the DATA of the tweet
router.get('/:id', async(req, res) => {
    // we get the new tweets from the params of the get message
    const id = req.params.id

    try{

        const response = await Tweet.findById(id)
        // then return the id of the new created tweet
        res.json({newId: response})
    }
    catch(err){
        res.json({error: err})
    }
})


// export this router for importing it in the app.js file
module.exports = router