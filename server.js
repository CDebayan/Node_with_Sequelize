const http = require('http');
const app = require('./app');
const sequelize = require('./database');

const StudentModel = require('../Node with Sequelize/api/models/student_model');
const ClassModel = require('../Node with Sequelize/api/models/class_model');
const MarksModel = require('../Node with Sequelize/api/models/marks_model');
const SubjectModel = require('../Node with Sequelize/api/models/subject_model');

const server = http.createServer(app);

StudentModel.belongsTo(ClassModel,{foreignKey: 'classId'});
StudentModel.hasMany(MarksModel,{foreignKey:'studentId'});
MarksModel.belongsTo(SubjectModel,{foreignKey:'subjectId'});


sequelize
    //.sync({force:true})
    .sync()
    .then(result => {
    server.listen(3002,'192.168.0.5');
}).catch(err =>{
    console.log(err);
});
