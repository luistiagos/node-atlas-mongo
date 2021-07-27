const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.hryvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = () => {
   mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}).then(res => console.log("Connected to DB"))
   .catch(err => console.log(err));
}

module.exports = connectDB;