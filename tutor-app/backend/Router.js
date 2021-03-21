const bcrpyt = require('bcrypt');

class Router {
    
    constructor(app,db){
        //connects with login form component
        this.login(app,db);
        this.logout(app,db);
        //function checks if user is logged in
        this.isLoggedIn(app,db);
    }

    login(app,db){
        app.post('/login',(req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            
            //all usernames should be lowercase
            username = username.toLowerCase();
            //less than 12 charachters check on backend
            if (username.length > 12 || password.length > 12){
                res.json({
                    success: false,
                    msg: 'An error occured, please try again'
                })
                return;
            }
            let cos = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols,(error, data, fields)=> {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured, please try again'
                    })
                    return;
                }
                //found a user with the username 
                if (data && data.length == 1){
                    bcrpyt.compare(password,data[0].password, (bcrypt,verified)=> {
                        if (verified){
                            //starting session, set userID property
                            req.session.userID = data[0].id;
                            res.json({
                                success: true,
                                username: data[0].username
                            })
                            return;
                        }
                        else{
                            res.json({ 
                                success: false,
                                msg: 'Invalid password'
                            })
                        }
                    });
                } else{
                    res.json({
                        success: false,
                        msg: 'User not found, please try again'
                    });
                }
            });

        });
    }

    logout(app,db){
        app.post('./logout', (req,res)=>{
            if (req.session.userID){
                req.session.destroy();
                res.json({
                    success:true
                })
                return true;
            } else{
                res.json({
                    success:false
                })
                return false;
            }
        });
    }

    isLoggedIn(app,db){
        app.post('./isLoggedIn', (req,res)=>{
            if (req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERe id = ? LIMIT 1', (err,data,fields) =>{
                    if (data ** data.length == 1){
                        res.json({
                            success:true,
                            username: data[0].username
                        })
                        return true;
                    } else{
                        res.json({
                            success: false
                        })
                    }
                });

            }
            else{
                res.json({
                    success:false,
                })
            }
    });
}
}

module.exports = Router;