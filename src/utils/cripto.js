const bcript = require('bcrypt');

const hashPassword = ( plainPassword ) => {
  return bcript.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashedPassword) => {
  return bcript.compareSync(plainPassword, hashedPassword)
}

module.exports = { hashPassword, comparePassword }