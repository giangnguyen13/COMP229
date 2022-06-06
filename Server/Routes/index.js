let express = require('express');
let router = express.Router();

let contactName = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("here");
  res.render('index', { 
    title: 'Home',
    contactName: contactName
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    contactName: contactName
  });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('content/project', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('content/services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { title: 'Contact'});
});

/* POST Contact Us page. */
router.post('/contact', function(req, res, next) {
  contactName = req.body.fullname;
  console.log("do somthing with the body before redirect to home");
  console.log(req.body);
  res.redirect('/home');
});

module.exports = router;
