const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');

// prefix all routes defined in `exampleRoutes.js` with `/examples
router.use('/examples', exampleRoutes);
// router.use('/users', userRoutes);
router.use('/games', gameRoutes);

module.exports = router;
