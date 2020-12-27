// store datta for each tweet
// 
// the fields that we store here is
// the user name of the poster, the tweet text, the date time is posted, the current tweet counter

const mongoose = require('mongoose')

// create the schema for the tweets
const Schema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        required: 0
    },
    time:{
        type: Date,
        required: Date.now
    }
})

// create and export the model Tweet from the schema above
module.exports = mongoose.model('Tweet', Schema)