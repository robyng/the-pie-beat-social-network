const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateOneThought,
    deleteThought
  } = require('../../controllers/thought-controller');


//thoughts
  router
    .route('/')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createThought)

    //thoughts by id
  router
    .route('/:id')
    .put(updateOneThought)
    .delete(deleteThought)  

    module.exports = router;