const Question = require('../models/question');


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
  create: questionsCreate,
  show: questionsShow,
  update: questionsUpdate,
  delete: questionsDelete
};
