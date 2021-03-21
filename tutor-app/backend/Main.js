const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname,'build')));
app.use(express.json()); //post data with json

//database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tutor app'
});

db.connect(function(err){
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }
})

const sessionStore = new MySQLStore({
    //store will expire in 5 years
    expiration: (1825*86400*1000),
    endConnectionOnClose: false,
},db);

app.use(session({
    key: 'kfdsf',
    secret: 'shhh',
    store: sessionStore,
    resave: false,
    saveUnitialized: false,
    cookie: {
        maxAge: (1825*86400*1000),
        htppOnly: false
    }

}));

//router 
new Router(app,db);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(3000);