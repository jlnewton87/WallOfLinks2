var express = require('express');
var router = express.Router();
var model = require('../model/panel.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET panels */
router.get('/panels', function(req, res) {
  model.panel.find().exec(
    function(err, panels){
     if(err){ throw err }
     res.send(panels); 
    }
  );
});

module.exports = router;
