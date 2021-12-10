const router = require('express').Router();
const apiRoutes = require('./apiRoutesold.js');

router.use('/apiRoutes', apiRoutes);

module.exports = router;
            