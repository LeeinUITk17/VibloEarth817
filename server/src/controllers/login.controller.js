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
        return res.send('register success');
        } catch (err) {
            // return res.render('login/formregister');
            return res.send('register failed');
        }
    };
    
    login = async (req, res, next) => {
        try {
            passport.authenticate('local', (err, user) => {
                if (err) {
                    console.log('error 1');
                    // return res.render('login/formlogin');
                    return res.send('login failed');
                }
                if (!user) {
                    // return res.redirect('/login');
                    return res.send('login failed');
                }
                req.login(user, async (err) => {
                    if (err) {
                        console.log('error 2');
                        // return res.render('login/formlogin');
                        return res.send('login failed');
                    }
                    try {
                    
                        const token = await loginService(req, req.body);
                        res.cookie('jwt', token, { httpOnly: true });
                        // return res.redirect('/home');
                        return res.send('login success');
                    } catch (error) {
                        console.log('error 4');
                        // return res.render('login/formlogin');
                        return res.send('login failed');
                    }
                });
            })(req, res, next);
        } catch (err) {
            // return res.render('login/formlogin');
            return res.send('login failed');
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