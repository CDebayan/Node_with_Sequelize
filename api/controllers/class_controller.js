const http = require("http");
const db = require('../../database');
const jwt = require('jsonwebtoken');
const ClassModel = require('../models/class_model');

exports.addClass = (req, res) => {
    const name = req.body.name;
    ClassModel.create({
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

exports.classList = (req, res) => {
    ClassModel.findAll({attributes:['id','name']}).then(result => {
        res.status(200).json({
            status: 1,
            message: "Class lists",
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
    ClassModel.findByPk(id,{attributes:['id','name']}).then(result => {
        res.status(200).json({
            status: 1,
            message: "Class details",
            data : result
        });
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.updateClass = (req, res) => {
    const id = req.params.id;
    ClassModel.update(req.body,{where:{id: id}}).then(result => {
        if (result[0] === 1) {
            res.status(200).json({
                status: 1,
                message: "Class updated",
            });
        }else{
            res.status(200).json({
                status: 0,
                message: "Class update failed",
            });
        }
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};

exports.deleteClass = (req, res) => {
    const id = req.params.id;
    ClassModel.destroy({where:{id: id}}).then(result => {
        if (result === 1) {
            res.status(200).json({
                status: 1,
                message: "Class deleted",
            });
        }else{
            res.status(200).json({
                status: 0,
                message: "Class delete failed",
            });
        }
    }).catch(err => {
        res.status(200).json({
            status: 0,
            message: err,
        });
    });
};
