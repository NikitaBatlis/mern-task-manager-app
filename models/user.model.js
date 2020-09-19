//User Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = mongoose.Schema({
	
	username: {
		type: String,
		required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
    },
    picture: {
        type: String
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'tasks'
    }]
}, { timestamps: true });



let User = mongoose.model('users', UserSchema);

module.exports = User;