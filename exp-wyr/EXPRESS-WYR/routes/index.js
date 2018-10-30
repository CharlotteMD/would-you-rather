var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Would You Rather' });
});

router.get('/api/questions', db.getAllQuestions);
router.get('/api/questions/:id', db.getAQuestion);
router.post('/api/questions', db.addAQuestion);
router.put('/api/questions/:id', db.editAQuestion);
router.delete('/api/questions/:id', db.deleteAQuestion);


module.exports = router;