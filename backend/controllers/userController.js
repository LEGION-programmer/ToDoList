const User = require('../db/models/user')
const bcrypt = require("bcryptjs")



class UserActions {
    // register
    async register(req, res){
        try{
            const login = req.body.login
            const email = req.body.email
            const password = req.body.password
            const cPassword = req.body.cPassword
            const findUser = await User.findOne({login: req.body.login})
            if(!findUser){
                if(password == cPassword){
                    const user = new User({login, email, password})
                    await user.save()
                    return res.json({validationStatus: true})
                }else{
                    return res.json({message: 'Passwords are not the same'})
                }
            }else{
                return res.json({message: 'This user already has an account with this login'})
            }

            
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

    // login
    async login(req, res){
        try {
            const user = await User.findOne({login: req.body.login})
        
            if (!user) {
                return res.json({message: "This user doesn't exist"})
            }else{
                bcrypt.compare(req.body.password, user.password, function(error, isMatch) {
                    if (error) {
                      throw error
                    } else if (!isMatch) {
                        return res.json({message: 'Wrong password'})
                    } else {
                        return res.json({validationStatus: true, userName: req.body.login})
                    }
                  })
            }
          } catch (err) {
            return res.status(500).json({message: err.message});
          }
        
    }
    
}


module.exports = new UserActions()