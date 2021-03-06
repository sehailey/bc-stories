const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const createDB = () => {
  if (process.env.USER === 'notnull') {
    require('../../.secrets')
    const config = require('./config')
    const db = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.options
    )
    return db
  } else {
    const db = new Sequelize(
      process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
      {
        logging: false
      }
    )
    return db
  }
}

const db = createDB()

module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
