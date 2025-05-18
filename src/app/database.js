const knex = require("knex");
const config = require("../../knexfile");
const { Model } = require("objection");

const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);

Model.knex(db);

module.exports = { db, Model };