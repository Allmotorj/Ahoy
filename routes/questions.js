var router = require('express').Router();
const questionsCtrl = require('../controllers/questions')


const isLoggedIn = (req, res, next) =>{
  if(req.isAuthenticated()) return next();
  res.redirect('/login');
};


router.get('/board', isLoggedIn, questionsCtrl.board);
router.get('/dashboard', isLoggedIn, questionsCtrl.dash);
router.get('/edit', isLoggedIn, questionsCtrl.editShow);
router.put('/:id', questionsCtrl.update);

router.delete('/:id', isLoggedIn, questionsCtrl.delQuestion);
router.post('/questions', isLoggedIn, questionsCtrl.addQuestion);
router.post('/board/:id/answer', isLoggedIn, questionsCtrl.addAns);


module.exports = router;


// router.post('/facts', (req, res) => {res.send('this is the facts page!')})


