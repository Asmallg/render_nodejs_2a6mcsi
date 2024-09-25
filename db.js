const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Database name
  process.env.DATABASE_USERNAME,// User
  process.env.DATABASE_PASSEWORD, // Password
  {
    host: process.env.DATABASE_HOST, 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
