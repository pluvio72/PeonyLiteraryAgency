var express = require('express');
var router = express.Router();

var model = require('../models/authors');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'About', scroll: false });
});

router.get('/authors/:number', (req, res) =>{
  var obj = {};
  model.find({ number: req.params.number }, (err, results) =>{
    var result = results[0];
    obj.name = result.name;
    obj.imagePath1 = result.imagePath1;
    obj.imagePath2 = result.imagePath2;
    obj.imageUrl1 = result.imageUrl1;
    obj.imageUrl2 = result.imageUrl2;
    obj.authorUrl = result.authorUrl;
    obj.description = result.description;
    res.render('authors', obj);
  });
});

router.get('/:page', (req, res) => {
  res.render('index', { page: req.params.page, scroll: true });
})

module.exports = router;
