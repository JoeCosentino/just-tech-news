const { Sequelize } = require("sequelize");

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;






// =======================
// FIRST VERSION OF CONNECTION: (COMMENTED OUT)

// // import the Sequelize constructor from the library
// const Sequelize = require('sequelize');

// require('dotenv').config();


// // create connection to our database, pass in your mySql information for username and passowrd
// // const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
// //     host: 'localhost',
// //     dialect: 'mysql',
// //     port: 3306
// // });

// module.exports = sequelize;