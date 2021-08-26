const express = require("express");
const router = express.Router();

/* GET home page. */
router.route("/")
  .get(async (req, res) => {
  res.render("signUp");
});

module.exports = router;
