const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Pets = db.define("pets", {
  id: {
    type: DataTypes.INTEGER, // Cambio el tipo de dato a UUID
    defaultValue: DataTypes.UUIDV4, // Agrego el valor por defecto
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
  },
  isVaccinated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});

module.exports = Pets