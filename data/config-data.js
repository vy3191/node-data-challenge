const knex = require('knex');
const config = require('./config-data');

module.exports = knex(config.development);