const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,

    },
    createdAt: {
        type: Date,
        default: Date.now,
        //add getter method to format timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        type: []
        //adjust Array of nested documents created with the reactionSchema
    }
    //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
})