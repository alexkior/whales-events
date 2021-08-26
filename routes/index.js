const express = require('express');
const router = express.Router();

/* GET home page. */
router.route('/')
  .get(async (req, res) => {
    res.render('index');
  });

router.route('/logout')
  .post(async (req, res) => {
    req.session.destroy();
    res.clearCookie('sId').redirect('/');
  });

module.exports = router;
