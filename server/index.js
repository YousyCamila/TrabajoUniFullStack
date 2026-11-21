// get - obtener
//post - crear
//put - actualizar
//delete - eliminar

const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const app = express();

app.use(cors());
app. use(express. json());


app.get('/estudiantes', (req, res) => {
db.query('SELECT * FROM estudiantes', (err, results) => {
if (err) return re.status(500).json({ error: 'Error al obtener los estudiantes' });
res.json(results);
});
});

app.post('/estudiantes', (req, res) => {
const { nombre, edad, carrera, correo, semestre } = req.body;

if (!nombre || !edad || !carrera || !correo || ! semestre) {
return res.status(400).json({ error: 'Todos los campos deben ser requeridos' });
}

const sql = 'INSERT INTO estudiantes(nombre, edad, carrera, correo, semestre) VALUES(?, ?, ?,?,?)';
db.query(sql, [nombre, edad, carrera, correo, semestre], (err, result) => {
if (err) return re.status(500).json({ error: 'Error al matricular el estudiante' });
res.json({ id: result.insertId, nombre, edad, carrera, correo, semestre });
});
});

app . put ( '/estudiantes/:id', (req, res) => {
const { nombre, edad, carrera, correo, semestre } = req.body;
const sql = 'UPDATE estudiantes SET nombre =? , edad =? , carrera =? , correo =? , semestre =? WHERE id =? ';
db.query(sql, [nombre, edad, carrera, correo, semestre, req.params.id], (err) => {
if (err) return re. status(500).json({ error: 'Error al actualiza el estudiante' });
res . json({message: 'Estudiante actualizado correctamente'});
});
})


app . delete( '/estudiantes/ :id', (req, res) => {
const sql = ('DELETE FROM estudiantes WHERE id =? ', [req.params.id], (err) => {
if (err) return re.status(500).json({ error: 'Error al eliminar el estudiante' });
res. json({ message: 'Estudiante eliminado correctamente' });

});
});

app.listen(3001, () => console.log('Servidor corriendo por el puerto 3001'));