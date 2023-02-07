const router = require('express').Router();

// prefix all routes defined in the api directory with `/api`
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
