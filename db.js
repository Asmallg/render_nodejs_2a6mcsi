const { Sequelize } = require('sequelize')

const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

app.get('/test-db', async (req, res) => {
  try {

    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ status: 'Success', time: result.rows[0] });
  } catch (err) {
    console.error('Erreur de connexion à la base de données:', err);
    res.status(500).json({ status: 'Error', message: 'Erreur de connexion à la base de données' });
  }
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
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
