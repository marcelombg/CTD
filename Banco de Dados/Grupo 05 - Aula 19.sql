/*EQUIPE 5
Marcelo Garofalo
Lucas Fontenele
Guilherme Brasil Tourinho
Denis Galdino
Joaderson Felipe Silva Barbosa
Julio Roncal
*/

CREATE SCHEMA IF NOT EXISTS aula19;
USE aula19;

CREATE TABLE IF NOT EXISTS materia (
id_materia INT NOT NULL AUTO_INCREMENT,
nome_materia VARCHAR(45),
professor_materia VARCHAR(45),
horario_materia TIME,
PRIMARY KEY (id_materia)
);

CREATE TABLE IF NOT EXISTS aluno (
id_aluno INT NOT NULL AUTO_INCREMENT,
id_materia INT NOT NULL,
nome_aluno VARCHAR(45),
data_nascimento_aluno DATE,
PRIMARY KEY (id_aluno),
CONSTRAINT fkid_materia
FOREIGN KEY (id_materia)
REFERENCES aula19.materia(id_materia)
);

INSERT INTO materia (id_materia, nome_materia, professor_materia, horario_materia)
VALUES (01, "BANCO DE DADOS", "RAFAEL", "07:00:00");

delimiter $$
create procedure inserindo_dados_materia(in id_materia INT, nome_materia VARCHAR(45), professor_materia VARCHAR(45), horario_materia TIME)
begin 
INSERT INTO materia (id_materia, nome_materia, professor_materia, horario_materia)
VALUES (id_materia, nome_materia, professor_materia, horario_materia);
end$$

delimiter ;

call inserindo_dados_materia(02, "BANCO DE DADOS", "RAFAEL", "07:00:00");
call inserindo_dados_materia(03, "BANCO DE DADOS", "RAFAEL", "07:00:00");
call inserindo_dados_materia(04, "INTRODUÇÃO A INFORMATICA", "JOAO", "08:00:00");
call inserindo_dados_materia(05, "INTRODUÇÃO A INFORMATICA", "JOAO", "08:00:00");

select*from materia;

delimiter $$
create procedure inserindo_dados_aluno(in id_aluno INT, id_materia INT, nome_aluno VARCHAR(45), data_nascimento_aluno DATE)
begin 
INSERT INTO aluno (id_aluno, id_materia, nome_aluno, data_nascimento_aluno)
VALUES (id_aluno, id_materia, nome_aluno, data_nascimento_aluno);
end$$

delimiter ;

call inserindo_dados_aluno(01, 05, "JONAS", "1985-10-08");
call inserindo_dados_aluno(02, 04, "MARIA", "1990-08-12");
call inserindo_dados_aluno(03, 03, "ANA", "1980-02-15");
call inserindo_dados_aluno(04, 02, "MARCOS", "1997-03-18");
call inserindo_dados_aluno(05, 01, "GABRIELA", "1982-12-12");

select*from aluno;

delimiter $$
create procedure atualizar_dados_materia(in id INT, nome VARCHAR(45))
begin 
UPDATE materia SET nome_materia = nome where id_materia = id;
end$$

delimiter ;

call atualizar_dados_materia (01, "BD");
select*from materia;

delimiter $$
create procedure deletar_dados_aluno(in id INT)
begin 
delete from aluno where id_aluno = id;
end$$

delimiter ;

call deletar_dados_aluno(05);
select*from aluno;

delimiter $$
create procedure visulizar_dados(in id INT)
begin 
select a.id_aluno, a.id_materia, a.nome_aluno  from aluno a 
inner join materia m on m.id_materia = a.id_materia order by id desc limit 3;
end$$

delimiter ;
call visulizar_dados(03);



