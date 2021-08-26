const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    res.render('account');
  })
  .post(async (req, res) => {

  })
  .put((req, res) => {
    
  })

   
module.exports = router;
