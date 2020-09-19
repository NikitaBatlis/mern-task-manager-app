//User Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    taskDescription: {
        type: String,
        min: 1
    },
    deadline: {
        type: Date,
        required: false
    },
    notes: {
        type: String,
        required: false        
    },
    completed: false

}, { timestamps: true })



module.exports = mongoose.model('tasks', TaskSchema);
