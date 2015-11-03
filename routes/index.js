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

/* DELETE panel */
router.delete('/panels/remove/:id', function(req, res) {
  model.panel.remove({_id: req.params.id}).exec(function(){
    console.log("removed panel: " + req.params.id);
    sendPanels(res);
  });
});

/* POST panel update */
router.post('/panels/update', function(req, res) {
  var panel = req.body.data;
  model.panel.update(
    {_id: panel._id},
    {$set: {
      links: panel.links,
      title: panel.title,
      order: panel.order
    }},
    function(){
      sendPanels(res);
    }
  );
});
//req.body.data

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
