//import mongoose
const { Schema, Types }  = require('mongoose');

//reactionId, default is objecid
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        //as a function it creates new id for every reaction
        default: () => Types.ObjectId()
    },
    //reactionBody, string required 280 char max
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
//username, string req
    username: {
        type: String,
        required: true
    },
    //created at, date, default current time,getter
    createdAt: {
        type: Date,
        default: Date.now,
        //add getter method to format timestamp on query
        get: time => new Date(time).toLocaleDateString()

    }
})

// const and module export
module.exports = ReactionSchema