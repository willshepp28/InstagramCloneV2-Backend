require('dotenv').config()


module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: console.log
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: DATABASE_URL,
    dialect: 'postgres',
    protocol: 'postgres',
    logging: true,
    dialectOptions: {
      ssl: true
    }
  }
}
