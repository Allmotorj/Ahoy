const User = require("../models/User")
const Question = require("../models/Question")
  
function dash(req, res, next) {
    res.render('dashboard/dashboard', { 
        user: req.user,
        title: 'Ahoy'
    } )
}


function board(req, res, next) {
  //console.log(req.query); 
    let modelQuery = req.query.name
        ? { name: new RegExp(req.query.name, "i") }
        : {};
    User.find(modelQuery)
    .exec(function (err, users) {
      if (err) return next(err); 
     
      res.render("users/board", {
        users,
        user: req.user,
        name: req.query.name,
        // questions: req.query.questions
      });
    });
}

// function addQuestion(req, res, next){
//   console.log(req.user)
//   console.log(req.params)
//   console.log(req.body)
//   console.log(req.query)
//   // req.user.Question.questions.push(req.body)
//   // req.user.save(function(err) 
//   {
//     res.redirect('/users/dashboard')
//   }
  
// }

function addQuestion(req, res, next) {
    req.user.questions.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users/dashboard');
    });}

function delQuestion(req, res, next) {User.findOne({
  'questions._id': req.params.id}, function(err, user) {
    user.questions.id(req.params.id).remove();
    user.save(function(err) {
      res.redirect('/users/dashboard');
    });
  });
}

const addAns = (req, res) => {
    Question.findById(req.params.id, function(err, user) {
      // req.params.id.push(req.body);
      // req.user.save(function(err))
  console.log(req.user)
  console.log(req.params)
  console.log(req.body)
  console.log(req.query) 
        // req.body.userId = req.user._id;
        // req.body.userName = req.user.name;
        // user.answer.push(req.body);
        // user.save(function(err)
            {
                res.redirect('/users/board')
            }
        // )    
      }
    )
}


module.exports = {
    dash,
    board,
    delQuestion,
    addQuestion,
    addAns
    
}