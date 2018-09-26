const { Router } = require('express')
const jsonwebtoken = require('jsonwebtoken')

const router = Router()

// middleware that is specific to this router
router.use(function cors(req, res, next) {
  console.log('[Auth CORS] user:', req.user, ', path:', req.path, ', req.headers.authorization:', req.headers.authorization);
  console.log('[Auth CORS] Before setHeader res.getHeaders:', res.getHeaders());
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('[Auth CORS] After setHeader res.getHeaders:', res.getHeaders());
  next()
})

import SECRET from '../const';
// const SECRET = require('../const')
/* login listing. */
router.all('/auth/login', function (req, res, next) {
  console.log('[/auth/login] req.body', req.body);

  const { username, password } = req.body
  const accessToken = jsonwebtoken.sign(
    {
      username,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + username,
      scope: ['test', 'user']
    },
    SECRET,
    {
      expiresIn: 300 // seconds
    }
  )

  res.json({
    token: {
      accessToken
    }
  })
})

/* GET user. */
router.all('/auth/user', function (req, res, next) {
  console.log('[/auth/user] req.user', req.user);
  res.json({ user: req.user })
})

/* logout listing. */
router.all('/auth/logout', function (req, res, next) {
  console.log('[/auth/logout] req.user', req.user);
  // const id = parseInt(req.params.id)
  res.json({
    success: true,
    respMsg: '登出成功'
  });
  // res.sendStatus(404)
})

module.exports = router
