const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const StudentController = require('../controllers/student_controller');
router.post("/register", upload.array(),StudentController.register);
router.get("/studentList",StudentController.studentList);
router.get("/studentDetails/:id",StudentController.studentDetails);

module.exports = router;