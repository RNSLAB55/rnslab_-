const mysql= require('mysql');
const config = require('./db_config.json');

const {production,development} = config;

let pool = mysql.createPool(development);

function getConnection(callback) {
    pool.getConnection(function(err,conn) {
        if(!err){
            callback(conn)
        }
    })
}

module.exports = getConnection;