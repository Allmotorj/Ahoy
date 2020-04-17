const User = require("../models/User")
const Question = require("../models/Question")
  
function dash(req, res, next) {
    User.findById(req.user._id)
    .populate('questions')
    .exec(function(err, user){
      res.render('dashboard/dashboard', { 
        user,
        title: 'Ahoy'
    } )
    })
    
}

function board(req, res, next) { 
  let modQuery = {}
  User.find(modQuery)
  .populate('questions')
  .exec(function(err, users){
    res.render("questions/board", {
      users,
      user: req.user,
      name: req.query.name,
      
    });
  });
}


function addQuestion(req, res, next){
  const question = new Question (req.body);
  question.user = req.user._id;
  question.save()
    req.user.questions.push(question);
    req.user.save(function(err) {
      res.redirect(`/questions/dashboard`)
    })
}

function delQuestion(req, res) {
  Question.findByIdAndRemove(req.params.id, function(err) {
      res.redirect('/questions/dashboard');
  });
}

function update(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, function(err, question){
    console.log(question)
    console.log(req.body)
      res.redirect('/questions/dashboard');
    
  })
}

function editShow(req, res, next) {
  User.findById(req.user._id)
  .populate('questions')
  .exec(function(err, user){
    res.render('dashboard/edit', { 
      user,
      title: 'Ahoy'
  } )
  })
  
}

const addAns = (req, res) => {
    req.body.user = req.user.id
    console.log("req.bodyUser", req.body.user)
  Question.findById(req.params.id, function(err, question) {
      req.body.userName = req.user.name
      question.answers.push(req.body);
      question.save(function(err) {
        res.redirect('/questions/board')
      })
    }
  )
}


module.exports = {
    dash,
    board,
    delQuestion,
    addQuestion,
    addAns,
    editShow,
    update
}