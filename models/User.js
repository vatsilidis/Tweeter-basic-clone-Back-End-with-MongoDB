const mongoose = require('mongoose')

// create the schema
const User = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})

// create the model Tweet from the schema above
module.exports = mongoose.model('User', 'Schema')