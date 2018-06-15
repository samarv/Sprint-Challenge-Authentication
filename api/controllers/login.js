const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');


function generateToken(user){
  const option = {
    expiresIn: '1h'
  }

  const payload = {
    name: user.username,
    race: user.race,
  }
  console.log(mysecret)
  return jwt.sign(payload,mysecret,option)
}

const login = (req, res) => {
  const { username, password } = req.body;

  
  User.findOne({username})
    .then(user => {
      if(user){
        user.validatePassword(password)
          .then(passMatch => {
            if(passMatch){
              const token = generateToken(user)

              res.status(200).json({ message: `come in ${username}`, token})
            }
            else{
              res.status(401).json({ message: `inccorect password`}) 
            }
          })
          .catch(err => {
            res.status(401).json({ message: `unable to verify password ${err}`}) 
          })
      }
      else{
        res.status(401).json({ message: `usernames don't match brah`}) 
      }

    })
};

module.exports = {
  login
};
