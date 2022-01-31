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
    .post(createThought) 


  //thoughts by thought id
  router
  .route('/:id')
    .get(getThoughtById)
    .put(updateOneThought)
    .delete(deleteThought)  


    module.exports = router;