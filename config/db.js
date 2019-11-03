//Connection with db 

const Sequelize = require('sequelize');

module.exports = new Sequelize('codegig', 'postgres', 'patchey86', {
  host: 'localhost',
  dialect: 'postgres'
});

