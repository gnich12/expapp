/**
 * Created by Alvaro on 11/12/2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about',{title:"testing templates", name:"testing"});


});

router.post('/testform', function(req, res) {
    var name = req.query.name;
    var source = req.query.source;
    var db=require('../DAO/countryDAO.js');
    console.log('Searching for: ' + name);

    //res.json(req.body);
    res.redirect('/city');
});


module.exports = router;