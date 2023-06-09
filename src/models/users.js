const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Pets = require('./pets')

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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pets_id: {
    type: DataTypes.INTEGER,
    references:{
      model: Pets,
      key: 'id'
    }
  },
});

module.exports = Users;
