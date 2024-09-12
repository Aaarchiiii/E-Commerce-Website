const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// app.use(cookieParser()); //middleware
app.use(cookieParser('youneedbettersecret'));

app.get('/', (req, res)=>{
    // res.send('root connected');
    console.log(req.cookies);
    res.send(req.cookies); //all easy cookies
    // res.send(req.signedCookies); //all signed cookies
})

// signed cookie
app.get('/getsignedcookies', (req, res)=>{
    res.cookie('bindaas', 'sachin' , {signed:true});
    res.send('cookies sent successfully');
})

// app.get('/setcookie', (req, res)=>{
//     res.cookie('mode' , 'dark'); //this is how the cookie is store
//     res.cookie('location' , 'delhi');
//     res.cookie('username' , 'archi');
//     res.send('server sent you cookies');
// })

// app.get('/getcookies', (req, res)=>{
//     let {mode, location, username} = req.cookies;
//     res.send(`my name is ${username}, stay in ${location} and theme is ${mode}`);
// })

app.listen(8080, ()=>{
    console.log("Server running at 8080");
})