const { findUserByEmail } = require("../controllers/users.controller");
const { comparePassword } = require("../utils/cripto");

const checkUserCredentials = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    const verfyPassword = comparePassword(password, user.password);

    if (verfyPassword) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

module.exports = checkUserCredentials;
