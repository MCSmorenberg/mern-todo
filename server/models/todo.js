const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todo Schema & model
const TodoSchema = new Schema({
  task: {
    type: String,
    required: [true, 'Todo field is rquired']
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

// Todo model represents the todo collection in the database
// MongDB will pluralize 'todo' to 'todo's' collection
const Todo = mongoose.model('todo', TodoSchema);

model.exports = Todo;