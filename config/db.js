const mongoose = require('mongoose');
let URI = "mongodb+srv://admin:1234@cluster0.i4ygmku.mongodb.net/todo_app?retryWrites=true&w=majority";
mongoose.connect(URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open',function callback(){
    console.log("Database connected successsfully");
});

module.exports = db;