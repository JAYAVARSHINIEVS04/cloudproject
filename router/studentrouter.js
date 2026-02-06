const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentcontroller');
const logger = require('../middleware/studentmiddleware');
router.get('/',logger,studentController.getstudents);
router.post('/add',logger, studentController.addstudent);
router.put('/',logger, studentController.updatestudent);
module.exports = router;