const  {Thought, User }  = require('../models');

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
createThought({params, body}, res) {
    console.log(body)
        // body is "thoughtText": "My String", "username": "robyng", "userId": "61f..."
    Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id }},
                {new: true}
            );
        })
        .then(dbData => {
            if(!dbData) {
                res.status(404).json({ message: 'no user with this id '});
                return;
            }
            res.json(dbData);
        })
        .catch(err => res.json(err));
},

// update a thought by its id
updateOneThought(req,res) {
    Thought.findByIdAndUpdate(req.params.id, req.body)
    .then(dbUserData => {
        if (!dbUserData) {
          res.json({ message: 'No thought found by this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.json(err);
      });
},

// delete thought by id
deleteThought(req,res) {
    Thought.findByIdAndDelete(req.params.id, req.body)
    .then(dbUserData => {
        if (!dbUserData) {
          res.json({ message: 'No thought found by this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        res.json(err);
      });

}


}


module.exports = thoughtController;

