const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getOneUser,
    updateOneUser,
    deleteUser
  } = require('../../controllers/user-controller');

  // get all and post routes
  router
    .route('/')
    .get(getAllUser)
    .post(createUser);
    

  router
    .route('/:id')
    .get(getOneUser)
    .post(updateOneUser)
    .delete(deleteUser)
    
    module.exports = router;