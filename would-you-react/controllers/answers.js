const Answer = require('../models/questions');

// function answersIndex(req, res, next) {
//   Answer
//     .find()
//
//     .exec()
//     .then(answers => res.json(answers))
//     .catch(next);
// }

function answersCreate(req, res, next) {
  req.body.createdBy = req.currentUser;

  Answer
    .create(req.body)
    .then(answer => res.status(201).json(answer))
    .catch(next);
}

function answersShow(req, res, next) {
  Answer
    .findById(req.params.id)
    .populate('question')
    .exec()
    .then((answer) => {
      if(!answer) return res.notFound();
      res.json(answer);
    })
    .catch(next);
}

function answersUpdate(req, res, next) {

  // if(req.file) req.body.image = req.file.filename;

  Answer
    .findById(req.params.id)
    .exec()
    .then((answer) => {
      if(!answer) return res.notFound();
      answer = Object.assign(answer, req.body);
      return answer.save();
    })
    .then(answer => res.json(answer))
    .catch(next);
}


function answersDelete(req, res, next) {
  Answer
    .findById(req.params.id)
    .exec()
    .then((answer) => {
      if(!answer) return res.notFound();
      return answer.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  create: answersCreate,
  show: answersShow,
  update: answersUpdate,
  delete: answersDelete
};
