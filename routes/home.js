const express = require('express');
const router = express.Router();

router.get('/course',(req,res)=>{
    res.render('index',{title: 'My Express App',message: 'Hello'});
    // console.log(req.params);
    // res.json((req)? 'ok': 'No');
});

module.exports = router;