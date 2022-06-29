const {Sequelize, DataTypes} = require('sequelize');

require('dotenv').config({path:'./config.env'}); 

const db = new Sequelize({
    dialect: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    logging: false
});

module.exports = {db, DataTypes};

