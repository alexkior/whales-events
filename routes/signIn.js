
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkUser } = require('../middleware/checkUser');


router.route('/')
    .get(async(req, res) => {
        res.render('signIn');
    })
    .post(async(req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        if (email && password) {
            const currentUser = await User.findOne({ where: { email } })
            console.log('addsas');
            if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
                req.session.user = { firstName: currentUser.firstName, id: currentUser.id };
                return res.redirect('/');
            } else {
                return res.redirect('/signIn')
            }
        }
    })


module.exports = router;
