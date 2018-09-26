const pkg = require('../package')
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jwt = require('express-jwt')

// Create express instnace
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())


// JWT middleware
import SECRET from './const';
// const SECRET = require('./const')
app.use(
  jwt({
    secret: SECRET
  }).unless({
    path: [
      `/${pkg.name}/api/auth/login`
      // , '/api/auth/user'
      //, '/api/auth/logout'
    ]
  })
)

// Require API routes
const auth = require('./routes/auth');
const users = require('./routes/users')

// Import API Routes
app.use(auth)
app.use(users)

// Error handler
app.use((err, req, res, next) => {
  console.log('[api error] req.path:', req.path)
  console.error('[=========================ERROR=======================]\n', err) // eslint-disable-line no-console
  res.status(err.status || 500).send(`${err.name}:${err.message}`);
})

// Export the server middleware
module.exports = {
  path: `/api`,
  handler: app
}