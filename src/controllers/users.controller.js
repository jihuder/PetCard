const Users = require('../models/users')
const hashPassword = require('../utils/cripto').hashPassword
const uuid = require('uuid')

// GET
const findAllUsers = async () => {
  const data = await Users.findAll();
  return data;
};


// GET: ID
const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id
    }
  });
  return data;
}

// GET: ID
const findUserByEmail = async (email) => {
  const data = await Users.findOne({
    where: {
      email: email
    }
  });
  return data;
}


// POST
const createUsers = async (userObj) => {
  const newUser = {
    id: uuid.v4(),
    username: userObj.username,
    email: userObj.email,
    password: hashPassword(userObj.password),
  }

  const data = await Users.create(newUser);
  return data;
}

// PUT
const updateUser = async(id, userUpt) => {
  const data = await Users.update(userUpt, {
    where: {
      id: id
    }
  })
  return data[0];
  // [1]
  // [0] error, id no existe
}

// DELETE
const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
          id: id
        }
  });
  return data;

  // 1 exito
  // 0 error
}



module.exports = {
 findAllUsers,
 findUserById,
 findUserByEmail,
 createUsers,
 updateUser,
 deleteUser
}