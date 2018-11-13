var express = require("express");
var router = express.Router()

var users = {users: [{name: 'ssx'}, {name: 'yh'}]};
router.get('/form', function(req, res, next) {
    res.render('form', users);
});

module.exports = router;