var express = require('express');
var router = express.Router();
router.use('/',require('./home'))
router.use('/images',require('./images'))
module.exports = router;