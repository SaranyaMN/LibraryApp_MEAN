const express = require('express');
const bookformRouter = express.Router();
const Bookdata = require('../model/Bookdata');

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, './public/images');
    },
    filename: function(request, file, callback){
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

function router(nav4){
    bookformRouter.get('/', function(req, res){
        res.render('bookform', 
        {
            nav4,
            title: 'Library'
        });
    });
    bookformRouter.post('/add', upload.single('image'), function(req, res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

    return bookformRouter;
}

module.exports = router;