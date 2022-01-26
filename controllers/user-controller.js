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
}