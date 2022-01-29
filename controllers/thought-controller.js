const  Thought  = require('../models').Thought;

const thoughtController = {
//get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
// get a single thought by its id
getThoughtById(req, res) {
    Thought.findById(req.params.id)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
// create new thought and push the created thought's id to the user's thought array
createThought({body},res) {
    // body is "thoughtText": "My String", "username": "robyng", "reactions": "", "reactionCount": ""
    Thought.create({body})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
}

// update a thought by its id

// delete thought by id


}


module.exports = thoughtController;

