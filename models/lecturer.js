const Joi = require('joi');
const mongoose = require('mongoose');

const lecturerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength: 50
    }
});

const Lecturer = mongoose.model('Lecurer',lecturerSchema);

function validateLecturer(Lecturer){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return schema.validate(Lecturer);
}

module.exports = lecturerSchema;
module.exports = Lecturer;
module.exports = validateLecturer;