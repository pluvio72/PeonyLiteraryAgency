var express = require('express');
var router = express.Router();

var model = require('../models/authors');

/* GET home page. */
router.get('/', function(req, res, next) {
  var list = [];
  model.find({}, (err, results) =>{
    for(var i = 0;i < results.length; i++){
      var cur = {};
      cur.image = results[i].authorImage;
      cur.number = results[i].number;
      cur.name = results[i].name;
      list.push(cur);
    }
    //sort alphabetically by author name, number != alphabetical order
    var final = [];
    var sorted = [];
    for(var i = 0; i < list.length; i++) { sorted.push(list[i]['name']) }
    sorted = sorted.sort();
    for(var x = 0; x < list.length; x++){
      for(var y = 0; y < list.length; y++){
        if(sorted[x] == list[y]['name']){ 
          final.push(list[y]); 
          continue; 
        }
      }
    }
    res.render('index', { page: 'About', scroll: false, authors: final });
  });
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
  var list = [];
  model.find({}, (err, results) => {
    for(var i = 0;i < results.length; i++){
      var cur = {};
      cur.image = results[i].authorImage;
      cur.number = results[i].number;
      cur.name = results[i].name;
      list.push(cur);
    }
    //sort alphabetically by author name, number != alphabetical order
    var final = [];
    var sorted = [];
    for(var i = 0; i < list.length; i++) { sorted.push(list[i]['name']) }
    sorted = sorted.sort();
    for(var x = 0; x < list.length; x++){
      for(var y = 0; y < list.length; y++){
        if(sorted[x] == list[y]['name']){ 
          final.push(list[y]); 
          continue; 
        }
      }
    }
    console.log('Page: ' + req.params.page);
    res.render('index', { page: req.params.page, scroll: true, authors: final });
  });
});

module.exports = router;
