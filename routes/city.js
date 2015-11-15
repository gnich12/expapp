var express = require('express');
var router = express.Router();
var db=require('../DAO/countryDAO.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  db.countryDAO.getAllCountries(function(cities){
    //console.log(cities);
    res.render('city',{
      title: 'Cities From MySQL',
      name:'MySql',
      cities:cities
    });
  });

});

module.exports = router;
