var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));

app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.urlencoded({extended: false}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8001, function(){
  console.log('Listening on 8001 to sample app');
})
