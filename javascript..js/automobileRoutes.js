// models/automobile.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
});

const Automobile = sequelize.define('Automobile', {
  marca: DataTypes.STRING,
  modelo: DataTypes.STRING,
  ano: DataTypes.INTEGER,
  placa: DataTypes.STRING,
});

module.exports = Automobile;