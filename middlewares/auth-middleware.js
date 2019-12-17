const Login = require('../login/login-model');
const bcrypt = require('bcryptjs');

function restricted(req, res, next) {

   // Get username and password from the headers
   const { username, password } = req.headers;

   if (username && password) {
      Login.findUser(username)
         .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
               // res.status(200).json({ message: `Welcome ${user.username}` });
               next();
            } else {
               res.status(401).json({ message: 'Invalid Credentials' })
            }
         })
         .catch(error => {
            res.status(500).json({ message: 'Problem validating user' });
         })
   } else {
      res.status(400).json({ message: 'No credentials provided.' });
   }
}

module.exports = restricted;