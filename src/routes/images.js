const express = require('express');
const router = express.Router();
const  imageController  = require('../controller/imagesController')

router.get("/:type/:image", imageController.getImage)
module.exports = router;