const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  /**
   * TODO on next release: add users router here.
   *
   */
  res.send('respond with a resource');
});

module.exports = router;
