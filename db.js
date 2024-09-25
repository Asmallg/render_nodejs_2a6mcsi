const { Sequelize } = require('sequelize')

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err.stack);
  } else {
    console.log('Connecté à la base de données PostgreSQL');
  }
});

// database
const sequelize = new Sequelize(
  '', // Database name
  '', // User
  '', // Password
  {
    host: '', // Host
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
