// models/automobileDetails.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
});

const AutomobileDetails = sequelize.define('AutomobileDetails', {
  quilometragem: DataTypes.INTEGER,
  cor: DataTypes.STRING,
});

module.exports = AutomobileDetails;