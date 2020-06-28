const Sequelize = require('sequelize');

const sequelize = require('../../database');

const Students = sequelize.define('students',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    classRoll: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    imageUrl:Sequelize.STRING
});

module.exports = Students;