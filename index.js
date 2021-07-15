
const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const mongoose = require('mongoose');
const express = require('express');
const app = express()

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses',courses);
app.use('/',home);

mongoose.connect('mongodb://localhost/coursesdb')
  .then(() => console.log('connected to MongoDB..'))
  .catch(err => console.log('could not connect to MongoDB..',err))

  const courseSchema = new mongoose.Schema({
    name: String,
    auther: String,
    tags: [ String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
  });

  const Course = mongoose.model('course',courseSchema);
  async function createCourse(){
    const course = new Course({
      name: "Node.js Course",
      author: "Ganga",
      tags: ['node','backend'],
      isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
  }

  createCourse();

  async function getCourse(){
    
  }

  getCourse();
  
console.log('Application name: '+config.get('name'));
console.log('Mail Server: '+config.get('mail.host'));
// console.log('Mail password: '+config.get('mail.password'));

if(app.get('env') === 'development'){
  app.use(morgan('tiny'));
    debug('morgan is enabaled');
}

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));