const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Pets = require('./pets.js')

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  pets_id: {
    type: DataTypes.UUID, // Cambio el tipo de dato a INTEGER
  },
});


module.exports = Users;