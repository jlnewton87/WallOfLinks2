var express = require('express');
var router = express.Router();
var model = require('../model/panel.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET panels */
router.get('/panels', function(req, res) {
  sendPanels(res);
});

/* Add Panel (GET) */
router.get('/panels/add', function(req, res) {
  var newPanel = new model.panel({title: "New Panel"});
  newPanel.save(function(err, panels){
    if(err) {console.log(err)}
    sendPanels(res);
  });
});

function sendPanels(response){
  console.log('sending panels');
  model.panel.find().exec(
    function(err, panels){
     if(err){ throw err }
      response.send(panels); 
    }
  );
};

module.exports = router;
