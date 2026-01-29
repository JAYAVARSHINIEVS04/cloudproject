const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'jaya88@',
    database:'demo_kec'
});
connection.connect((err) => {
    if(err){
        console.error('Error connecting to database:', err);    
    }else{
        console.log('Connect to database');
    }
});
module.exports = connection;