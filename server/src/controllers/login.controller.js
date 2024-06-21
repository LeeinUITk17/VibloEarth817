const{
    login : loginService,
    register: registerService,
}=require('../services/login.service');
const passport = require('passport');
class loginController{
    register = async (req, res, next) => {
        try {        
            console.log(req.body);
           const user= await registerService(req.body);
        //    return res.render('login/updateimage',{id: user._id});
        return res.send(true);
        } catch (err) {
            // return res.render('login/formregister');
            return res.send(false);
        }
    };
    
    login = async (req, res, next) => {
        try {
            passport.authenticate('local', (err, user) => {
                if (err) {
                    console.log('error 1');
                    // return res.render('login/formlogin');
                    return res.send(false);
                }
                if (!user) {
                    // return res.redirect('/login');
                    return res.send(false);
                }
                req.login(user, async (err) => {
                    if (err) {
                        console.log('error 2');
                        // return res.render('login/formlogin');
                        return res.send(false);
                    }
                    try {
                    
                        const token = await loginService(req, req.body);
                        res.cookie('jwt', token, { httpOnly: true });
                        // return res.redirect('/home');
                        return res.send(true);
                    } catch (error) {
                        console.log('error 4');
                        // return res.render('login/formlogin');
                        return res.send(false);
                    }
                });
            })(req, res, next);
        } catch (err) {
            // return res.render('login/formlogin');
            return res.send(false);
        }
    };
    logout = async (req, res, next) => {
        try {
            res.clearCookie('jwt');
            req.logout((err) => {
                if (err) {
                    return next(err); 
                }
                // return res.render('login/formlogin');
                return res.send('logout');
            });
        } catch (err) {
            next(err);
        }
    };
   
}
module.exports=new loginController();