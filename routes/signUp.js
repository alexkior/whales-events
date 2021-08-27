
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');



router.route('/')
  .get(async (req, res) => {
    res.render('signUp', { err: req.query.err });
  })
  .post(async (req, res) => {
    const { firstName, lastName, email, password, userCity } = req.body;
    if (firstName && lastName && email && password && userCity) {
      const hashPass = await bcrypt.hash(password, +process.env.SALTROUND);
      const newUser = await User.create({ firstName, lastName, email, password: hashPass, userCity }, { returning: true, plain: true });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.redirect('/');
    } else {
      return res.redirect('/signUp/?err=error')
    }
  })

module.exports = router;
