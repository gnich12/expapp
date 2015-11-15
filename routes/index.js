var express = require('express');
var router = express.Router();
var vdata = require('../videodata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Exprerrrrrss ',
    name:'driving',
    videodata: vdata});
});

module.exports = router;
