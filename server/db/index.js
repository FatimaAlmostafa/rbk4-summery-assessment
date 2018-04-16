var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/pokemon';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
// mongoose.Connect('mongoUri')
var db = mongoose.connection;




db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function(){
	console.log('we are connected')
});











module.exports = db;
