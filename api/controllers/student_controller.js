const http = require("http");
const db = require('../../database');
const jwt = require('jsonwebtoken');
const StudentModel = require('../models/student_model');
const ClassModel = require('../models/class_model');
const MarksModel = require('../models/marks_model');
const SubjectModel = require('../models/subject_model');

exports.register = (req, res, next) => {
    const name = req.body.name;
    const classRoll = req.body.classRoll;
    const classId = req.body.classId;
    const imageUrl = req.body.imageUrl;
    StudentModel.create({
        name: name,
        classRoll: classRoll,
        classId: classId,
        imageUrl: imageUrl
    }).then(result => {
        res.status(200).json({
            status: 1,
            message: "Register successful",
            student: result['dataValues']
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.studentList = (req, res, next) => {
    StudentModel.findAll({
        attributes: ['id', 'name', 'classRoll', 'imageUrl'],
        include: {model: ClassModel, attributes: ['name']}
    }).then(result => {
        res.status(200).json({
            status: 1,
            message: "Student lists",
            students: result
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.studentDetails = (req, res) => {
    const id = req.params.id;
    StudentModel.findByPk(id, {
            attributes: ['id', 'name', 'classRoll', 'imageUrl'],
            include: [{model: ClassModel, attributes: ['id', 'name']}, {
                model: MarksModel,
                attributes: ['id', 'marks'],
                include: [{model: SubjectModel, attributes: ['id','name']}]
            }],
        }
    ).then(result => {
        res.status(200).json({
            status: 1,
            message: "Student details",
            data: result
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};
