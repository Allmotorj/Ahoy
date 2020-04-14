var router = require('express').Router();
const usersCtrl = require('../controllers/users')


const isLoggedIn = (req, res, next) =>{
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
};


router.get('/board', isLoggedIn, usersCtrl.board);
router.get('/dashboard', isLoggedIn, usersCtrl.dash);


router.delete('/questions/:id', isLoggedIn, usersCtrl.delQuestion);
router.post('/questions', isLoggedIn, usersCtrl.addQuestion);
router.post('/board/:id/answer', isLoggedIn, usersCtrl.addAns);

module.exports = router;


// router.post('/facts', (req, res) => {res.send('this is the facts page!')})