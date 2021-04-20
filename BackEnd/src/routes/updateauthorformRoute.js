const express = require('express');
const updateauthorformRouter = express.Router();
const Authordata = require('../model/Authordata');

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
    updateauthorformRouter.post('/:id', function(req, res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('updateauthorform', {
                nav4,
                title: 'Library',
                id: author._id
            })
        })
    });
    updateauthorformRouter.post('/:id/update', upload.single('image'), function(req, res){
        const id = req.params.id;
        var item = {
            name: req.body.name,
            book: req.body.book,
            genre: req.body.genre,
            image: req.file.filename
        }
        Authordata.updateOne({_id:id}, {name:item.name, book:item.book, genre:item.genre, image:item.image})
        .then(function(){
            res.redirect('/authors');
        })
    });

    return updateauthorformRouter;
}

module.exports = router;