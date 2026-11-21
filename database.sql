CREATE DATABASE matricula_ibero;

USE matricula_ibero;

create table estudiantes
(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
edad INT NOT NULL,
carrera VARCHAR(100) NOT NULL,
correo VARCHAR(100) NOT NULL,
semestre INT NOT NULL
);
