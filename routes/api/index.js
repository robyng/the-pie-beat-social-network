const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')


// prefix of user to routes in user-routes.js
router.use('/users', userRoutes);

// root for thought routes
//NOTE server stops with this line. says middleware required
router.use('/thoughts', thoughtRoutes);


module.exports = router;