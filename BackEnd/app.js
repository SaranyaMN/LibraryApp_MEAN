const express = require('express');
const app = new express();
const port = process.env.PORT || 5000;

const nav1 =  [
    {link: '/login', name:'Log In'},
    {link: '/signup', name: 'Sign Up'}
]
const nav2 =  [
    {link: '/login', name:'Log In'}
]
const nav3 =  [
    {link: '/signup', name:'Sign Up'}
]
const nav4 =  [
    {link: '/books', name:'Books'},
    {link: '/authors', name:'Authors'},
    {link: '/bookform', name:'Add a New Book'},
    {link: '/authorform', name:'Add a New Author'},
    {link: '/login', name:'Log Out'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav4);
const bookformRouter = require('./src/routes/bookformRoute')(nav4);
const authorformRouter = require('./src/routes/authorformRoute')(nav4);
const authorsRouter = require('./src/routes/authorRoutes')(nav4);
const signupRouter = require('./src/routes/signupRoute')(nav2);
const loginRouter = require('./src/routes/loginRoute')(nav3);
const updatebookformRouter = require('./src/routes/updatebookformRoute')(nav4);
const updateauthorformRouter = require('./src/routes/updateauthorformRoute')(nav4);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public')); 

app.set('view engine', 'ejs'); 
app.set('views', './src/views'); 

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/bookform', bookformRouter);
app.use('/authorform', authorformRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/updatebookform', updatebookformRouter);
app.use('/updateauthorform', updateauthorformRouter);

app.get('/', function(req, res){
    res.render('index', 
    {
            nav1,
            title: 'LibraryApp'
    });
});
app.get('/welcome', function(req, res){
    res.render('welcome',
    {
        nav4,
        title: 'LibraryApp'
    });
});

app.listen(port, ()=>{console.log("Server Ready at" +port)});