const mysql = require('mysql2');
const {MYSQLHOST, MYSQLUSER, MYSQL_ROOT_PASSWORD, MYSQLDATABASE, MYSQLPORT} = require("./../../config.js");

class Conectar{
    constructor(){
        let conection = mysql.createConnection({
            host : MYSQLHOST,
            user : MYSQLUSER,
            password : MYSQL_ROOT_PASSWORD,
            database : MYSQLDATABASE,
            port: PORT
        });

        conection.connect();

        return conection;
    }
}

module.exports = Conectar;