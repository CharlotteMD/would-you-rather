var express = require('express');
var router = express.Router();

var db = require('../queries/questions');
// var users = require('../queries/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Would You Rather' });
});

router.get('/api/questions', db.getAllQuestions);
router.get('/api/questions/:id', db.getAQuestion);
router.post('/api/questions', db.addAQuestion);
router.put('/api/questions/:id', db.editAQuestion);
router.delete('/api/questions/:id', db.deleteAQuestion);

router.get('/api/users', db.getAllUsers);
router.get('/api/users/:id', db.getAUser);
router.post('/api/users', db.addAUser);
router.put('/api/users/:id', db.editAUser);
router.delete('/api/users/:id', db.deleteAUser);


module.exports = router;