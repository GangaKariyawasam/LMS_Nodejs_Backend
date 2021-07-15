const Joi = require('joi');
const mongoose = require('mongoose');
const {lecturerSchema} = require('./lecturer');

const course = mongoose.model('course',new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true, 
        minlength: 3,
        maxlength: 255
    },
    lecturer: {
        type: lecturerSchema,
        required: true
    },
    fees:{
        type: Number, 
        required: true,
        min: 0,
        max: 255
    }
}));

function validateCourse(course){
    const schema ={
        name: Joi.String().min(3).required(),
        lecturerId: Joi.string().required(),

    }
}