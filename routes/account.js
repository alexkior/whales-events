const router = require('express').Router();
const {checkUser} = require('../middleware/checkUser');


const infa = {
  firstName: 'vasya',
  lastName: 'petya',
  email: 'kakawechnii',
  password: 'ti 4o durak?',
  cityName: 'parawa',
};

router.route('/')
  .get(checkUser, async (req, res) => {
      const user = await User.findOne({ where: { id: req.session.user.id } });
      res.render('account', { infa, id: req.session.user.id, user });
  })
  .post(async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.session.user.id } });
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500).end();
    }
  })
  .patch(async (req, res) => {
    try {
      const { firstName, lastName, email, password, cityName } = req.body;
      const newInfoUser = await User.update({ firstName, lastName, email, password, cityName },
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
