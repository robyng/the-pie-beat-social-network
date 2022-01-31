const router = require('express').Router();
const {
  getAllUser,
  createUser,
  getOneUser,
  updateOneUser,
  deleteUser,
  addFriend,
  deleteFriend
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


router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

module.exports = router;