const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');

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
        get: time => new Date(time).toLocaleDateString()

    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
        //adjust Array of nested documents created with the reactionSchema  

}, {
    toJSON:{getters:true}
})

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', ThoughtSchema)
module.exports = Thought