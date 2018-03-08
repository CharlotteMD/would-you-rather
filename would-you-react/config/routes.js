const router = require('express').Router();

const users  = require('../controllers/user');
const questions  = require('../controllers/question');
// const answers  = require('../controllers/question');

const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// User page where you can view and edit your profile
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

// INDEX questions
router.route('/questions')
  .post(secureRoute, questions.create);

// SHOW individual questions, delete them from that page (cant edit questions)
router.route('/questions/:questionId')
  .get(questions.show)
  // .put(secureRoute, questions.update)
  .delete(secureRoute, questions.delete);

// router.route('/questions/:questionId/answer/:answerId')
//   .post(secureRoute, answers.create)
//   .put(secureRoute, answers.update)
//   .delete(secureRoute, answers.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;





router.route('/auctions')
  .get(auctions.index);

router.route('/auctions/new/:hotelId')
  .post(secureRoute, auctions.create);

router.route('/auctions/:id')
  .get(auctions.show)
  .delete(secureRoute, auctions.delete);

router.route('/auctions/:id/bids')
  .post(secureRoute, auctions.addBid);