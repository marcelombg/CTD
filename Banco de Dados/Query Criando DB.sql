CREATE SCHEMA saude_dh;
USE saude_dh;

CREATE TABLE saude_dh.paciente (
paciente_id INT NOT NULL,
paciente_idsaude INT NOT NULL,
paciente_nome VARCHAR (50),
paciente_sobrenome VARCHAR (100),
PRIMARY KEY (paciente_id)
);

CREATE TABLE saude_dh.consultas (
consulta_id INT NOT NULL,
paciente INT NOT NULL,
medico VARCHAR (50),
data_consulta DATE,
hora_consulta TIME,
PRIMARY KEY (consulta_id)
);

CREATE TABLE saude_dh.especialidades (
especialidade_id INT NOT NULL AUTO_INCREMENT,
especialidade_nome VARCHAR (100),
PRIMARY KEY (especialidade_id)
);

CREATE TABLE saude_dh.medico (
medico_id INT NOT NULL,
medico_nome VARCHAR (50),
medico_sobrenome VARCHAR (50),
medico_especialidade INT NOT NULL,
PRIMARY KEY (medico_id),
CONSTRAINT FKmedico
FOREIGN KEY (medico_especialidade)
REFERENCES saude_dh.especialidades (especialidade_id)
);

CREATE TABLE saude_dh.consultas (
consultas_id INT NOT NULL,
paciente_id INT NOT NULL,
medico_id INT NOT NULL,
data_consulta DATE,
hora_consulta TIME,
PRIMARY KEY (consultas_id),
CONSTRAINT FKpaciente_id
FOREIGN KEY (paciente_id)
REFERENCES saude_dh.paciente (paciente_id),
CONSTRAINT FKmedico_id
FOREIGN KEY (medico_id)
REFERENCES saude_dh.medico (medico_id)
);

INSERT INTO paciente (paciente_id, paciente_idsaude, paciente_nome, paciente_sobrenome)
VALUE (1, 123456, 'JOAO', 'FERREIRA'),(2, 234567, 'ANA', 'SILVA');
SELECT*FROM paciente;

INSERT INTO especialidades (especialidade_id, especialidade_nome)
VALUE (001, 'ORTOPEDISTA'),(002, 'CARDIOLOGISTA');
SELECT*FROM especialidades;

INSERT INTO medico (medico_id, medico_nome, medico_sobrenome, medico_especialidade)
VALUE (1, 'ALCILENE', 'SOUZA', '3');

INSERT INTO medico (medico_id, medico_nome, medico_sobrenome, medico_especialidade)
VALUE (2, 'DIEGO', 'REIS', '1');
SELECT*FROM medico;

INSERT INTO consultas (consultas_id, paciente_id, medico_id, data_consulta, hora_consulta)
VALUE (1, 1, 2, '2021-02-18', '09:00:00');
SELECT*FROM consultas;

INSERT INTO consultas (consultas_id, paciente_id, medico_id, data_consulta, hora_consulta)
VALUE (2, 1, 2, '2021-02-21', '19:05:00');
SELECT*FROM consultas;

alter table medico drop column	medico_especialidade;
alter table medico drop constraint FKmedico;

drop table paciente;
alter table consultas drop constraint FKpaciente_id;
drop table especialidades;

alter table consultas drop constraint FKmedico_id;
alter table consultas drop constraint FKpaciente_id;
drop table consultas;

drop table medico;

drop database saude_dh;

