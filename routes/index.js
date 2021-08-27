const express = require('express');
const router = express.Router();
const { User, Event, City, Tag } = require('../db/models');

/* GET home page. */
router.route('/')
  .get(async (req, res) => {
    const findTags = await Tag.findAll();
    const findCity = await City.findAll();
    res.render('index', { findCity, findTags });
  });

router.route('/logout')
  .post(async (req, res) => {
    req.session.destroy();
    res.clearCookie('sId').redirect('/');
  });
































  router.route('/search')
  .get((req, res) => {
    res.render('index')
  })


  router.route('/search')
  .post(async (req, res) => {
    const { tagId, cityId } = req.body;
    const findEvents = await Event.findAll({ where: { tagId, cityId } });
    res.json(findEvents);
  })
module.exports = router;
