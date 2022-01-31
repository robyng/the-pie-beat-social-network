const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req,res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    // get one user by id
    getOneUser(req,res) {
        User.findById(req.params.id)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // get one user by id and update
    updateOneUser(req,res) {
        User.findByIdAndUpdate(req.params.id, req.body)
        .then(dbUserData => {
            if (!dbUserData) {
              res.json({ message: 'No user found by this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            res.json(err);
          });
    },

    // delete user by id 
    deleteUser(req,res) {
        User.findByIdAndDelete(req.params.id, req.body)
        .then(dbUserData => {
            if (!dbUserData) {
              res.json({ message: 'No user found by this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            res.json(err);
          });

    },
    // create a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // add friend to user's friend list
    addFriend({params, body},res) {
        User.findByIdAndUpdate(params.id)
        .then(({ _id }) => {
          return User.findOneAndUpdate(
              { _id: _id },
              // params.friendId refers to the route /api/users/:id/friends/:friendId
              { $push: { friends: params.friendId }},
              {new: true}
          )
        })
        .then(dbUserData => {
            if (!dbUserData) {
              res.json({ message: 'No user found by this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            res.json(err);
          });
    },
}

module.exports = userController;