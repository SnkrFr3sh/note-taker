const router = require('express').Router();
const apiRoutes = require('./apiRoutes.js');

router.use('/apiRoutes', apiRoutes);

module.exports = router;
            