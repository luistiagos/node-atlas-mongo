const mongoose = require('mongoose');
const propertiesReader = require('properties-reader');

var properties = propertiesReader('../props.txt');
var connectionUrl = properties.get('connection.url');

const URI = connectionUrl;//"mongodb+srv://dbUser:dbUser@cluster0.hryvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = () => {
   mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}).then(res => console.log("Connected to DB"))
   .catch(err => console.log(err));
}

module.exports = connectDB;