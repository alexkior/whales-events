const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');



router.route('/signUp')
  .get(async (req, res) => {
    console.log(req.body)
    res.render('signUp')
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const hashPass = await bcrypt.hash(password, +process.env.SALTROUND);
      const newUser = await User.create({ name, email, password: hashPass }, { returning: true, plain: true });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.redirect('/')
    } else {
      return res.redirect('/user/signUp/?err')
    }
  })



module.exports = router;
