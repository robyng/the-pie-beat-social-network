const router = require('express').Router();
const userRoutes = require('./user-routes');


// prefix of user to routes in user-routes.js
router.use('/pizzas', userRoutes);

module.exports = router;