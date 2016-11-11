var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/example_db');

var models_path = __dirname + '/../models'

// reads through model for .js
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') > 0){
		require(models_path + '/' + file);
	}
})
