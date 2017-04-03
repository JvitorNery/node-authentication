//model for user authentication

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// configurar modelo de Schema
var UserSchema = new Schema({
	nome:{
		type: String,
		unique: true,
		required: true
	},
	password: {
		type:String,
		required:true
	}
});

UserSchema.pre('save', function(next){
	bcrypt.compare(passw, this.password, function (err, isMatch){
		if(err){
			return cb(err);
		}
		cb(null, isMatch);
	});
});

module.exports = mongoose.model('User', UserSchema);