const router = require('express').Router();
const { User } = require('../db/models')
const { checkUser } = require('../middleware/checkUser');

// const infa = {
//   firstName: 'vasya',
//   lastName: 'petya',
//   email: 'kakawechnii',
//   password: 'ti 4o durak?',
//   cityName: 'parawa',
// };


router.route('/')
  .get(checkUser, async (req, res) => {
    const thisUser = await User.findOne({ where: { id: req.session.user.id } });
    console.log(thisUser);
    res.render('account', { thisUser });
  })
  .post(async (req, res) => {
    try {
      const thisUser = await User.findOne({ where: { id: req.session.user.id } });
      return res.render('formsInputs', { thisUser });
      // return res.json(user);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500).end();
    }
  })
  .patch(async (req, res) => {
    try {
      const { firstName, lastName, email, password, userCity } = req.body;
      const newInfoUser = await User.update({ firstName, lastName, email, userCity },
        { where: { id: req.session.user.id } });
      return res.json(newInfoUser);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500).end();
    }
  })
  .put((req, res) => {
  })

module.exports = router;
