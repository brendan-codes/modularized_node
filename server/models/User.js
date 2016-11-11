var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  age: Number,
  _messages: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model('User', UserSchema);
