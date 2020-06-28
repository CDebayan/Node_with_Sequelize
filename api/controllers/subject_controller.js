const http = require("http");
const db = require('../../database');
const jwt = require('jsonwebtoken');
const SubjectModel = require('../models/subject_model');

exports.addSubject = (req, res) => {
    const name = req.body.name;
    SubjectModel.create({
        name: name,
    }).then(result => {
        res.status(200).json({
            status: 1,
            message: "Add successful",
            data : result['dataValues']
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.subjectList = (req, res) => {
    SubjectModel.findAll({attributes:['id','name']}).then(result => {
        res.status(200).json({
            status: 1,
            message: "Subject lists",
            data : result
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.classDetails = (req, res) => {
    const id = req.params.id;
    SubjectModel.findByPk(id,{attributes:['id','name']}).then(result => {
        res.status(200).json({
            status: 1,
            message: "Subject details",
            data : result
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.updateSubject = (req, res) => {
    const id = req.params.id;
    SubjectModel.update(req.body,{where:{id: id}}).then(result => {
        if (result[0] === 1) {
            res.status(200).json({
                status: 1,
                message: "Subject updated",
            });
        }else{
            res.status(200).json({
                status: 0,
                message: "Subject update failed",
            });
        }
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.deleteSubject = (req, res) => {
    const id = req.params.id;
    SubjectModel.destroy({where:{id: id}}).then(result => {
        if (result === 1) {
            res.status(200).json({
                status: 1,
                message: "Subject deleted",
            });
        }else{
            res.status(200).json({
                status: 0,
                message: "Subject delete failed",
            });
        }
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};
