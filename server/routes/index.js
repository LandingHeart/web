var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
  
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
