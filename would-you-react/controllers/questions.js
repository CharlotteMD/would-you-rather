const Question = require('../models/question');

function questionsIndex(req, res, next) {
  Question
    .find()
    // .populate('hotel')
    .exec()
    .then(questions => res.json(questions))
    .catch(next);
}

function questionsCreate(req, res, next) {
  req.body.addedBy = req.currentUser;

  Question
    .create(req.body)
    .then(question => res.status(201).json(question))
    .catch(next);
}

function questionsShow(req, res, next) {
  Question
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then((question) => {
      if(!question) return res.notFound();
      res.json(question);
    })
    .catch(next);
}

// function questionsUpdate(req, res, next) {
//
//   // if(req.file) req.body.image = req.file.filename;
//
//   Question
//     .findById(req.params.id)
//     .exec()
//     .then((question) => {
//       if(!question) return res.notFound();
//       question = Object.assign(question, req.body);
//       return question.save();
//     })
//     .then(question => res.json(question))
//     .catch(next);
// }

function questionsDelete(req, res, next) {
  Question
    .findById(req.params.id)
    .exec()
    .then((question) => {
      if(!question) return res.notFound();
      return question.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}


module.exports = {
  index: questionsIndex,
  create: questionsCreate,
  show: questionsShow,
  delete: questionsDelete
};
