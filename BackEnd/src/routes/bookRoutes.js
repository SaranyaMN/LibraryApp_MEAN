const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav4){
    booksRouter.get('/', function(req, res){
        Bookdata.find()
        .then(function(books){
            res.render('books', 
            {
                nav4,
                title: 'Library',
                books
            });
        })
    });
    
    booksRouter.get('/:id', function(req, res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book', {
                nav4,
                title: 'Library',
                book
            })
        })
    });

    booksRouter.post('/:id/delete', function(req, res){
        const id = req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(function(){
            res.redirect('/books');
        })
    });

    return booksRouter;
}

module.exports = router;