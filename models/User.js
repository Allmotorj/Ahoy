var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var questionSchema = new Schema({
  text: String
}, {
  timestamps: true
})


var userSchema = new Schema({
  name: String,
  email: String,
  cohort: String,
  avatar: String,
  questions: [questionSchema],
  //  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  googleId: String,
  facebookId: String,
  
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);