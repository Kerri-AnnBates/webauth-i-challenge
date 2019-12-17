const express = require('express');

const usersRouter = require('../users/users-router');
const registerRouter = require('../register/register-router');
const loginRouter = require('../login/login-router');
const logoutRouter = require('../logout/logout-router');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);

router.get('/', (req, res) => {
   res.status(200).json({ api: `it's running` });
});

module.exports = router;