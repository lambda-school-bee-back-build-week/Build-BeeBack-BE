const localPg = {
  host: 'localhost',
  database: 'testPgDb',
  user: 'postgres',
  password: 'pass'
}

const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
      }
    }
  },
  testing: {
    // I don't want to see the warning that returning() doesn't do anything in sqlite3, this overrides that
    log: {
      warn(message) {
      }
    },
    client: 'sqlite3',
    connection: {
      filename: "./data/test.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
      }
    }
  },
  production: {
    client: 'pg',
    connection: productionDbConnection, // could be an object or a string
    migrations: {
      directory: './data/production/migrations',
    },
    seeds: {
      directory: './data/production/seeds',
    },
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done); // enforce FK
    }
  }
}