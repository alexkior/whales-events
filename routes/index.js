const express = require('express');
const router = express.Router();
const { User, Event, City, Tag } = require('../db/models');

/* GET home page. */
router.route('/')
  .get(async (req, res) => {
    const findTags = await Tag.findAll();
    const findCity = await City.findAll();
    // console.log(req.session.guest);
    const events = await Event.findAll({
      include: [
        {
          model: Tag,
          as: "Tag"
        },
        {
          model: City,
          as: "City"
        }
      ]
    });
    res.locals.events = events;
    res.render('index', { findCity, findTags });
  });

router.route('/logout')
  .post(async (req, res) => {
    req.session.destroy();
    res.clearCookie('sId').redirect('/');
  });

router.route('/create')
  .post(async (req, res) => {
  const newPost = await Event.create({ eventName: req.body.eventName, date: req.body.date, userId: req.session.user.id, tagId: req.body.tagId, cityId: req.body.cityId });
  // console.log(req.body)
  res.redirect('/');
});


  router.route('/search')
  .get((req, res) => {
    res.render('index')
  })


router.route('/search')
  .post(async (req, res) => {
    const { tagId, cityId } = req.body;
    const findTags = await Tag.findOne({ where: { id:tagId } });
    const findCities = await City.findOne({ where: { id:cityId } });
    if (tagId != 1 && cityId != 1) {
      const findEvents = await Event.findAll({ where: { tagId, cityId } });
      console.log(findEvents);
      res.json({findEvents, findTags, findCities});
    }
    if (tagId == 1 && cityId != 1) {
      const findEvents = await Event.findAll({ where: { cityId } });
      res.json({findEvents, findTags, findCities});
    }
    if (tagId != 1 && cityId == 1) {
      const findEvents = await Event.findAll({ where: { tagId } });
      res.json({findEvents, findTags, findCities});
    }
  });
module.exports = router;
