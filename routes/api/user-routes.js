const router = require('express').Router();
const {
    getAllUser,
    createUser
  } = require('../../controllers/user-controller');

  // get all and post routes
  router
    .route('/')
    .get(getAllUser)
    .post(createUser);

    module.exports = router;