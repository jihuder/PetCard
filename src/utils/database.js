const configs = require('../../config')
const { Sequelize } = require('sequelize');

const db = new Sequelize(configs.db[configs.api.nodeEnv])

module.exports = db