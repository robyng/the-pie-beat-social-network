const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
  } = require('../../controllers/thought-controller');



  router
    .route('/')
    .get(getAllThoughts)
    .get(getThoughtById)

    module.exports = router;