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
    }
}
// get a single thought by its id

// create new thought and push the created thought's id to the user's thought array

// update a thought by its id

// delete thought by id


module.exports = thoughtController;

