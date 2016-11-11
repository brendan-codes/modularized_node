var mongoose = require('mongoose');

var User = mongoose.model('User');
var Message = mongoose.model('Message');

var users = {};

users.index = function(req, res){
  User.find({}).populate('_messages').exec(function(err, data){
    console.log(data);
    if(err){
      console.log('error!')
    }else{
      res.render('index', {users: data});
    }
  })
}

users.new = function(req, res){
  // console.log(req.body);
  var new_user = new User(req.body);
  new_user.save(function(err){
    // console.log(results);
    if(err){
      console.log(err);
      console.log('There was a problem!');
      res.redirect('/');
    }else{
      res.redirect('/');
    }
  })
}


module.exports = users;
