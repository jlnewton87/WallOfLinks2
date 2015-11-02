var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET panels */
router.get('/panels', function(req, res) {
  res.end();
});

module.exports = router;
