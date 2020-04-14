const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSchema = new Schema({
  text: String,
  user: {type: Schema.Types.ObjectId, ref:'User'}
})

var questionSchema = new Schema({
  text: String,
  answers: [answerSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);