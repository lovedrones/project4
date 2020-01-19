const User = require("../models/user");
const jwt = require('jsonwebtoken'); //to generate signed token
const expressJwt = require('express-jwt'); // for authorization
const { errorHandler } = require("../helpers/dbErrorHandler");


module.exports = {
  signup
};
async function signup(req, res) {
    console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
   } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
   }
  user.salt = undefined
  user.hashed_password = undefined
} 

exports.signin = (req, res) => {
  // finder the user based on email
  const {email, password} = req.body 
  User.findOne({ email }, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
         error: "User with that email does not exist. Please signup"
      });
    } 
    // if user is found make sure the email and password 
    if(!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match"
      })
    }

    //generate signed token token with user id and secret
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });

    const { _id, name, email, role } = user;
    return res.json({token, user: { _id, email, name, role } });
  });
};