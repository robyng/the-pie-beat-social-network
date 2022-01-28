const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        // dropDups: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Must be valid email'
        }
    },
    //array that references _id of Thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // self reference by _id to User model
    //Need to add virtual schema for friend count that gets number of users' friends     
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

const User = model('User', UserSchema);
module.exports = User;