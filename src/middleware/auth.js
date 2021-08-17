const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
  try {
    const token = req.header('Authorization')
    console.log(token)
  } catch (error) {
    res.status(401).send({ error: 'Not authenticated'})
  }
}

module.exports = auth