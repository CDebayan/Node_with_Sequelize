const Sequelize = require('sequelize');

const sequelize = require('../../database');

const Marks = sequelize.define('marks',{
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    marks: Sequelize.INTEGER,
});

module.exports = Marks;