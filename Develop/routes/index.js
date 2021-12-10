const router = require('express').Router();

const api = require('./apiRoutes');
const html = require('./htmlRoutes');

router.use(api);
router.use(html);


module.exports = router;