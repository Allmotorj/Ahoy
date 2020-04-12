const User = require("../models/User")


// function logIn(req, res, next) {
//     res.render('login', { title: 'Ahoy' } )
//     console.log(req.query.name)
// }
  
function dash(req, res, next) {
    res.render('users/dashboard', { title: 'Ahoy'} )
}


module.exports = {
    // logIn,
    dash,
}


