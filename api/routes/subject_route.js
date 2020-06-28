const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const SubjectController = require('../controllers/subject_controller');

router.post("/addSubject", upload.array(),SubjectController.addSubject);
router.get("/subjectList",SubjectController.subjectList);
router.get("/subjectDetails/:id",SubjectController.classDetails);
router.put("/updateSubject/:id",SubjectController.updateSubject);
router.delete("/deleteSubject/:id",SubjectController.deleteSubject);

module.exports = router;