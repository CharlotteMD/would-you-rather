const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  choice: {type: String, required: true},
  comment: {type: String}
}, {
  timestamps: true
});

const questionSchema = new mongoose.Schema({
  ratherA: {type: String, required: true},
  ratherB: {type: String, required: true},
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  answers: [ answerSchema ]
});

questionSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

questionSchema.methods.belongsTo = function questionBelongsTo(user) {
  return this.addedBy.id === user.id;
};

module.exports = mongoose.model('Question', questionSchema);
