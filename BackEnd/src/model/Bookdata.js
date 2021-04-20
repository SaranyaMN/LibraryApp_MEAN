//Accessing Mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://saru123:saru123@data.hquhx.mongodb.net/LibraryApp?retryWrites=true&w=majority');

//Schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Model creation
var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;