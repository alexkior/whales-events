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

router.route('/editpage')
  .get((req, res)=> {
    res.render('account');
  });

router.route('/')
  .get(checkUser, async (req, res) => {
    const thisUser = await User.findOne({ where: { id: req.session.user.id } });
    res.render('inputlessAccount', { thisUser });
  })
  .post(async (req, res) => {
    try {
      const thisUser = await User.findOne({ where: { id: req.session.user.id } });
      // return res.redirect('/account');
      return res.json(thisUser);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500).end();
    }
  })
  .patch(async (req, res) => {
    try {
      const { firstName, lastName, email, userCity } = req.body;
      console.log("loh");
      await User.update({ firstName, lastName, email, userCity },
        { where: { id: req.session.user.id } });
        const newInfoUser = await User.findOne({ where: { id: req.session.user.id } });
        console.log(newInfoUser);
      return res.json(newInfoUser);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500).end();
    }
  })
  .put((req, res) => {
  })

module.exports = router;
