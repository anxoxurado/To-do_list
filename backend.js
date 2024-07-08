const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configura la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Reemplaza con tu usuario de MySQL
    password: 'JURA050808HCHRDNA5', // Reemplaza con tu contraseña de MySQL
    database: 'to_do_list'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ejemplo de una consulta SELECT

db.query('SELECT * FROM tareas', (err, results, fields) => {
    if (err) {
      console.error('Error in query:', err);
      return;
    }
    console.log('Results:', results);
  });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
