const mysql = require('mysql2');

const connection = mysql. createConnection({
host: 'localhost',
user: 'root',
database: 'matricula_ibero'
});
connection.connect((err) => {
if (err) return console.log('Error conectando con la base de datos', err);
console.log('Conectado a MySQL');

});