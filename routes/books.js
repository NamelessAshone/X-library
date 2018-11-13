var express = require('express');
var router = express.Router();

var users = {users: [{name: 'ssx'}, {name: 'yh'}]};
router.get('/', function(req, res, next) {
  res.render('books', users);
  // console.log('hit http req')
});

module.exports = router;