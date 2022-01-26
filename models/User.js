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
    thoughts: {
        type: [Thought.id] // check this. Supposed to be array that references _id of Thought model

    },
    friends: {
        type: [UserSchema] // check this. self reference by _id
    }
})

const User = model('User', UserSchema);