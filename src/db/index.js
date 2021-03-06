const Sequelize = require('sequelize');

// Variables de entorno
require('dotenv').config();
const PASSWORD = process.env.PASSWORD;

// Conexión a la BD
const DBConnect = new Sequelize(
    'store',
    'postgres',
    PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)


module.exports = { DBConnect };