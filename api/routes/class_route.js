const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer();
const ClassController = require('../controllers/class_controller');

router.post("/addClass", upload.array(),ClassController.addClass);
router.get("/classList",ClassController.classList);
router.get("/classDetails/:id",ClassController.classDetails);
router.put("/updateClass/:id",ClassController.updateClass);
router.delete("/deleteClass/:id",ClassController.deleteClass);

module.exports = router;