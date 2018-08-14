var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("content/index", {
    title: "Express Demo"
  });
});



/* GET about page */
router.get("/about", function (req, res, next) {
  res.render("content/about", {
    title: "About Express",
    author: "Kei Mizubuchi"
  });
});

/* GET contact page */
router.get("/contact", function (req, res, next) {
  res.render("content/contact", {
    title: "Contact Me",
    authors: ["Tom", "Mark", "Luke", "Jaden", "John"]
  });
});

module.exports = router;