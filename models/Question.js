const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSchema = new Schema({
  text: String,
  user: {type: Schema.Types.ObjectId, ref:'User'},
  userName: String,
}, {
  timestamps: true
});


var questionSchema = new Schema({
  text: String,
  answers: [answerSchema],
  user: {type: Schema.Types.ObjectId, ref:'User'}
}, {
  timestamps: true
});


module.exports = mongoose.model('Question', questionSchema);