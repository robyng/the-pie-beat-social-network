const { User } = require('../models');
const { db } = require('../models/User');

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

    // create a user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;