
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');


router.route('/')
    .get(async(req, res) => {
        res.render('signIn');
    })
    .post(async(req, res) => {
        const { email, password } = req.body;
        if (email && password) {
            const currentUser = await User.findOne({ where: { email } })
            if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
                req.session.user = { firstName: currentUser.firstName, id: currentUser.id };
                return res.redirect('/')
            } else {
                return res.redirect('/user/signIn')
            }
        }
    })



    router.route('/logout')
    .post(async (req, res) => {
      req.session.destroy();
      res.clearCookie('sId').redirect('/');
    });


module.exports = router;
