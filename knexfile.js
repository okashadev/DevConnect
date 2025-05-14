// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'dev_connect',
      port: process.env.DB_PORT || 5432,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  // staging: {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.STAGING_DB_HOST || 'localhost',
  //     user: process.env.STAGING_DB_USER || 'username',
  //     password: process.env.STAGING_DB_PASSWORD || 'password',
  //     database: process.env.STAGING_DB_NAME || 'my_db',
  //     port: process.env.STAGING_DB_PORT || 5432,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './migrations',
  //   },
  // },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: process.env.PROD_DB_HOST || 'localhost',
  //     user: process.env.PROD_DB_USER || 'username',
  //     password: process.env.PROD_DB_PASSWORD || 'password',
  //     database: process.env.PROD_DB_NAME || 'my_db',
  //     port: process.env.PROD_DB_PORT || 5432,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './migrations',
  //   },
  // },
};
