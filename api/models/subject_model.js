const Sequelize = require('sequelize');

const sequelize = require('../../database');

const Subject = sequelize.define('subject',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
});

module.exports = Subject;