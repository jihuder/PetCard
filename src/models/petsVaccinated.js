const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Pets = require('./pets')
const Vaccines = require('./vaccines')

const PetsVaccinated= db.define('pets_vaccinated', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  petsId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pets,
      key: 'id'
    }
  },
  vaccinesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Vaccines,
      key: 'id'
    }
  }
})

module.exports = PetsVaccinated