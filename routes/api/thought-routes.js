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


  //       //thoughts by thought id
  router
  .route('/:id')
    .get(getThoughtById)
    .put(updateOneThought)
    .delete(deleteThought)  
  //   .put(updateOneThought)
  //   .delete(deleteThought)  

  router
  .route('/:userId/:commentId')
    // .get(getThoughtById)



  router
  .route('/:userId')
  .post(createThought)  

    module.exports = router;