 const userControllers = require("../controllers/users.controller");
const hashPassword = require("../utils/cripto").hashPassword;
const handleResponses = require("../utils/handleResponses");

// GET
const getAllUsers = (req, res) => {
  userControllers
    .findAllUsers()
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request not found",
        fields: err,
      });
    });
};

// GET: ID
const getUserById = (req, res) => {
  userControllers
    .findUserById(req.params.id)
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "the request was successful",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the request not found",
        fields: err,
      });
    });
};

// MY USER
const getMyUser = (req, res) => {
  const id = req.user.id;

  userControllers
    .findUserById(id)
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: "This is your current user",
        data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: "Something bad getting the current user",
        data: err,
      });
    });
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  userControllers
    .deleteUser(id)
    .then((data) => {
      handleResponses.success({
        res,
        status: 200,
        message: `User deleted successfully with id: ${id}`,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: "Something bad trying to delete this user",
      });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;

  const { firstName, lastName, email, password, profileImage, phone } =
    req.body;

  const userObj = {
    firstName,
    lastName,
    email,
    password: hashPassword(password),
    profileImage,
    phone,
  };

  userControllers
    .updateUser(id, userObj)
    .then(() => {
      handleResponses.success({
        res,
        status: 200,
        message: "Your user has been updated succesfully!",
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: "Something bad",
        data: err,
      });
    });
};

// POST

const postUser = (req, res) => {
  userControllers
    .createUsers(req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "user created successfully",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the user was not created successfully",
        fields: {

        },
        data: err,
      });
    });
};

const putUser = (req, res) => {
  userControllers
    .putUser(req.params.id, req.body)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "updated user",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "erorr updating user",
        fields: err,
      });
    });
};

// DELETE
const deleteUser = (req, res) => {
  userControllers
    .deleteUser(req.params.id)
    .then(() => {
      handleResponses.success({
        res,
        status: 204,
        message: "deleted user",
      });
    })
    .catch((err) => {
      handleResponses.err({
        res,
        status: 404,
        message: "erorr deleting user",
        fields: err,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser
};
