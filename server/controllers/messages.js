var mongoose = require('mongoose');

var User = mongoose.model('User');
var Message = mongoose.model('Message');

module.exports = (function(){
  return {
    new: function(req, res){
      var new_message = new Message(req.body);
      User.findOne({_id: req.params._id}, function(err, user){
        if(err){
          console.log('error!');
        }else{
          console.log(user);
          user._messages.push(new_message);
          new_message._user = user;
          new_message.save(function(err){
            if(err){
              console.log('error!');
            }else{
              user.save(function(err){
                if(err){
                  console.log('err');
                }else{
                  res.redirect('/');
                }
              })
            }
          })
        }
      })
    }
  }
})();
