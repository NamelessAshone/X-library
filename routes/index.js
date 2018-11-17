const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  /**
   *  Router to show index page. In this page, it will randomly show some books.
   */

  res.render('index', { title: 'Welcome' });
});

module.exports = router;
