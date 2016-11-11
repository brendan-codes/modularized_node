var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MessageSchema = new Schema({
  message: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

var Message = mongoose.model('Message', MessageSchema);
