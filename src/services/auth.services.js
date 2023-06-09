const checkUserCredentials = require("../controllers/auth.controller");
const handleResponses = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')
const config = require( '../../config').api

const postLogin = (req, res) => {

  const { email, password } = req.body;
  checkUserCredentials( email, password )
  .then((data) => {
    if(data) {

      const token = jwt.sign( {
        id: data.id,
        username: data.username,
        email: data.email
      }, config.secretkey, {
        expiresIn: '5d'
      })

      handleResponses.success({
        res,
        status: 200,
        message: 'Correct Credentials',
        data: token
      })

    }
    else {
      handleResponses.error({
        res,
        status: 401,
        message: 'Incorrect Credentials'
      })
    }
  }).catch((err) => {
    handleResponses.error({
      res,
      status: 400,
      fields: err, 
      message: 'something bad'
    })
  });
}

module.exports = postLogin

