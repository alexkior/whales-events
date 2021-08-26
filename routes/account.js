const router = require('express').Router();
const infa = {
  firstName: 'vasya',
  lastName: 'petya',
  email: 'kakawechnii',
  password: 'ti 4o durak?',
  cityName: 'parawa',
};

router.route('/')
  .get(async (req, res) => {
    if (!res.session.user) {
      res.redirect('/index');
    }
    res.render('account', { infa });
  })
  .post(async (req, res) => {
   
  })
  .delete(async (req, res) => {
    try{
      const thisUser = await User.findOne({ where: { id: res.session.user.id } });
      return res.json(thisUser);
  }catch(err){
      console.log(err)
      return res.sendStatus(500).end()
  }
  })
  .put((req, res) => {
    const userId = req.session.user.id;
    res.json(userId);
  })

module.exports = router;
