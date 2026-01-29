const express = require('express');
const router = express.Router();
const studentController = require('./controller/studentcontroller');
const studentMiddleware = require('./controller/middleware/studentmiddleware');
router.get('/', studentController.getstudents);
router.post('/add', studentMiddleware, studentController.addstudent);
router.put('/update/:id', studentController.updatestudent);
router.delete('/delete/:id', studentController.deletestudent);
module.exports = router;