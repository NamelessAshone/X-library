var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

var users = {users: [{name: 'ssx'}, {name: 'yh'}]};
router.get('/form', function(req, res, next) {
    res.render('form', users);
});

module.exports = router;
