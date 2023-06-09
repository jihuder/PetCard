const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Vaccines = db.define('vaccines', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Vaccines