const Sequelize = require('sequelize');

const sequelize = require('../../database');

const Class = sequelize.define('class',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
});

module.exports = Class;