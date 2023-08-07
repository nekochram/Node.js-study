var express = require('express');
const {formidable} = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function(req, res, next) {
    res.render('portrait');
});

router.post('/portrait', function(req, res, next) {
    const form = formidable({
        multiples:true,
        uploadDir:__dirname + '/../public/images',
        keepExtensions:true
    });

  form.parse(req, (err, fields, files) => {
    let url=''
    if (err) {
      next(err);
      return;
    }
    url=`/images/${files.avatar[0].newFilename}`
    res.end(url);
  });
});

module.exports = router;
