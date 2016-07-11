/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport')

module.exports = {

  login (req, res) {
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        return res.send(401, {message: 'Username or password is wrong!', err: err, info: info})
      }
      req.logIn(user, function (err) {
        if (err) {
          res.send(401, {message: err})
        } else {
          res.redirect('/')
        }
      })
    })(req, res);
  },
  logout (req, res) {
    req.logout();
    res.send({message: "Successfully Logout!"})
  },
  info (req, res){
    res.send(req.user)
  }

};

