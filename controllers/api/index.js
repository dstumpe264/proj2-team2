const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');

// prefix all routes defined in `exampleRoutes.js` with `/examples
router.use('/examples', exampleRoutes);

module.exports = router;
