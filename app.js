const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require("./seed");
const productRoutes = require('./routes/product');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const reviewRoutes = require('./routes/review');
const flash = require('connect-flash');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');
const cartRoutes = require('./routes/cart');

mongoose.connect('mongodb://localhost:27017/shopping-app')
.then(()=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("DB not connected");
    console.log(err);
})

// session
let configSession ={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 24*7*60*60*1000, 
        maxAge: 24*7*60*60*1000
    }
}

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(session(configSession));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for locals
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// passport
passport.use(new LocalStrategy(User.authenticate()));

// seeding
// seedDB();

app.use(productRoutes);
app.use(reviewRoutes); //so that har incoming request ke liye path check kiya jaaye
app.use(authRoutes); //so that har incoming request ke liye path check kiya jaaye
app.use(cartRoutes); //so that har incoming request ke liye path check kiya jaaye

app.listen(8080, ()=>{
    console.log("Server connected at port 8080");
})