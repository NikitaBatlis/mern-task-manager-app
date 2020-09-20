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
        lowercase: true,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'tasks'
    }]
}, { timestamps: true });

UserSchema.index({email: 1, type: 1}, {unique: true});

let User = mongoose.model('users', UserSchema);

module.exports = User;