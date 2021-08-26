const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');



router.route('/signUp')
  .get(async (req, res) => {
    console.log(req.body)
    res.render('signUp')
  })
  .post(async (req, res) => {
    const { firstName, lastName, email, password, cityName } = req.body;
    if (firstName && lastName && email && password && cityName) {
      const hashPass = await bcrypt.hash(password, +process.env.SALTROUND);
      const newUser = await User.create({ firstName, lastName, email, password: hashPass, cityName }, { returning: true, plain: true });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.redirect('/')
    } else {
      return res.redirect('/user/signUp/?err')
    }
  })



module.exports = router;
