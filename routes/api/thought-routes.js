const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateOneThought,
    deleteThought,
    deleteReaction,
    addReaction
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

//reactions 
router
.route('/:id/reactions')
  .post(addReaction)

router
.route('/:id/reactions/:reactionId')  
  .delete(deleteReaction)

    module.exports = router;