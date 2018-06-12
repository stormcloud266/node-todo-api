const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
