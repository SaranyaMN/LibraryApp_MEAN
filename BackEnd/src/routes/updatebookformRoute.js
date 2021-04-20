const express = require('express');
const updatebookformRouter = express.Router();
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
    updatebookformRouter.post('/:id', function(req, res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('updatebookform', {
                nav4,
                title: 'Library',
                id: book._id
            })
        })
    });
    updatebookformRouter.post('/:id/update', upload.single('image'), function(req, res){
        const id = req.params.id;
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
        Bookdata.updateOne({_id:id}, {title:item.title, author:item.author, genre:item.genre, image:item.image})
        .then(function(){
            res.redirect('/books');
        })
    });

    return updatebookformRouter;
}

module.exports = router;