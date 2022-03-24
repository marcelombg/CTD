-- CKECHOPOINT 1 - BANCO DE DADOS - Marcelo Garofalo

CREATE SCHEMA IF NOT EXISTS ESCOLA;
USE ESCOLA;

CREATE TABLE IF NOT EXISTS INSTRUTOR (
ID_INSTRUTOR INT NOT NULL AUTO_INCREMENT,
RG_INSTRUTOR INT NOT NULL,
NOME_INSTRUTOR VARCHAR(45),
NASCIMENTO_INSTRUTOR DATE,
TITULACAO_INSTRUTOR INT NOT NULL,
PRIMARY KEY (ID_INSTRUTOR));

CREATE TABLE IF NOT EXISTS TELEFONE_INSTRUTOR (
ID_TELEFONE_INSTRUTOR INT NOT NULL AUTO_INCREMENT,
NUMERO_TELEFONE_INSTRUTOR INT NOT NULL,
TIPO_TELEFONE_INSTRUTOR VARCHAR(45),
ID_INSTRUTOR INT NOT NULL,
PRIMARY KEY (ID_TELEFONE_INSTRUTOR),
CONSTRAINT FKID_INSTRUTOR
FOREIGN KEY (ID_INSTRUTOR)
REFERENCES ESCOLA.INSTRUTOR(ID_INSTRUTOR));
 
CREATE TABLE IF NOT EXISTS ATIVIDADE (
ID_ATIVIDADE INT NOT NULL AUTO_INCREMENT,
NOME_ATIVIDADE VARCHAR(100),
PRIMARY KEY (ID_ATIVIDADE));

CREATE TABLE IF NOT EXISTS TURMA (
ID_TURMA INT NOT NULL AUTO_INCREMENT,
HORARIO_TURMA TIME,
DURACAO_TURMA INT NOT NULL,
DATA_INICIO_TURMA DATE,
DATA_FIM_TURMA DATE,
ID_ATIVIDADE INT NOT NULL,
ID_INSTRUTOR INT NOT NULL,
PRIMARY KEY (ID_TURMA),
CONSTRAINT FKID_ATIVIDADE
FOREIGN KEY (ID_ATIVIDADE)
REFERENCES ESCOLA.ATIVIDADE(ID_ATIVIDADE),
CONSTRAINT FKID_INSTRUTOR_TURMA
FOREIGN KEY (ID_INSTRUTOR)
REFERENCES ESCOLA.INSTRUTOR(ID_INSTRUTOR));

CREATE TABLE IF NOT EXISTS ALUNO (
CODIGO_MATRICULA_ALUNO INT NOT NULL AUTO_INCREMENT,
ID_TURMA INT NOT NULL,
DATA_MATRICULA_ALUNO DATE,
NOME_ALUNO VARCHAR (45),
ENDERECO_ALUNO TEXT,
TELEFONE_ALUNO INT NOT NULL,
DATA_NASCIMENTO_ALUNO DATE,
ALTURA_ALUNO FLOAT,
PESO_ALUNO INT NOT NULL,
PRIMARY KEY (CODIGO_MATRICULA_ALUNO),
CONSTRAINT FKID_TURMA
FOREIGN KEY (ID_TURMA)
REFERENCES ESCOLA.TURMA(ID_TURMA));

CREATE TABLE IF NOT EXISTS MATRICULA (
CODIGO_MATRICULA_ALUNO INT NOT NULL,
ID_TURMA INT NOT NULL,
CONSTRAINT FKCODIGO_MATRICULA_ALUNO
FOREIGN KEY (CODIGO_MATRICULA_ALUNO)
REFERENCES ESCOLA.ALUNO(CODIGO_MATRICULA_ALUNO),
CONSTRAINT FKID_TURMA_MATRICULA
FOREIGN KEY (ID_TURMA)
REFERENCES ESCOLA.TURMA(ID_TURMA));

CREATE TABLE IF NOT EXISTS CHAMADA (
ID_CHAMADA INT NOT NULL AUTO_INCREMENT,
DATA_CHAMADA DATE,
PRESENTE_CHAMADA BOOL,
CODIGO_MATRICULA_ALUNO INT NOT NULL,
ID_TURMA INT NOT NULL,
PRIMARY KEY (ID_CHAMADA),
CONSTRAINT FKCODIGO_MATRICULA_ALUNO_CHAMADA
FOREIGN KEY (CODIGO_MATRICULA_ALUNO)
REFERENCES ESCOLA.MATRICULA(CODIGO_MATRICULA_ALUNO),
CONSTRAINT FKID_TURMA_CHAMADA
FOREIGN KEY (ID_TURMA)
REFERENCES ESCOLA.MATRICULA(ID_TURMA));

INSERT INTO atividade (ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES (01, "ATIVIDADE 01");
INSERT INTO atividade (ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES (02, "ATIVIDADE 02");
INSERT INTO atividade (ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES (03, "ATIVIDADE 03");
INSERT INTO atividade (ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES (04, "ATIVIDADE 02");
INSERT INTO atividade (ID_ATIVIDADE, NOME_ATIVIDADE)
VALUES (05, "ATIVIDADE 01");
SELECT*FROM atividade;

INSERT INTO instrutor (ID_INSTRUTOR, RG_INSTRUTOR, NOME_INSTRUTOR, NASCIMENTO_INSTRUTOR, TITULACAO_INSTRUTOR)
VALUES (01, 123456789, "JOAO DAS COUVES", "1985-08-20", 001);
INSERT INTO instrutor (ID_INSTRUTOR, RG_INSTRUTOR, NOME_INSTRUTOR, NASCIMENTO_INSTRUTOR, TITULACAO_INSTRUTOR)
VALUES (02, 321654987, "MARIA DAS NEVES", "1990-10-25", 001);
INSERT INTO instrutor (ID_INSTRUTOR, RG_INSTRUTOR, NOME_INSTRUTOR, NASCIMENTO_INSTRUTOR, TITULACAO_INSTRUTOR)
VALUES (03, 321654987, "JOANAS DAS TREVAS", "1991-11-10", 002);
INSERT INTO instrutor (ID_INSTRUTOR, RG_INSTRUTOR, NOME_INSTRUTOR, NASCIMENTO_INSTRUTOR, TITULACAO_INSTRUTOR)
VALUES (04, 321654987, "MARCELO SILVA", "1981-01-15", 002);
INSERT INTO instrutor (ID_INSTRUTOR, RG_INSTRUTOR, NOME_INSTRUTOR, NASCIMENTO_INSTRUTOR, TITULACAO_INSTRUTOR)
VALUES (05, 321654987, "LUCIANO JUSTINO", "1996-02-12", 001);
SELECT*FROM instrutor;

DELETE FROM instrutor WHERE ID_INSTRUTOR = 05;
SELECT*FROM instrutor;

INSERT INTO turma (ID_TURMA, HORARIO_TURMA, DURACAO_TURMA, DATA_INICIO_TURMA, DATA_FIM_TURMA, ID_ATIVIDADE, ID_INSTRUTOR)
VALUES (01, null, 01, "2021-01-02", "2021-12-20", 01, 01);
SELECT*FROM turma;

UPDATE turma SET HORARIO_TURMA = "07:00";
SELECT*FROM turma;

INSERT INTO ALUNO (CODIGO_MATRICULA_ALUNO, ID_TURMA, DATA_MATRICULA_ALUNO, NOME_ALUNO, ENDERECO_ALUNO, TELEFONE_ALUNO, DATA_NASCIMENTO_ALUNO, ALTURA_ALUNO, PESO_ALUNO)
VALUES (001, 01, "2021-09-27", upper("JOAO ALMEIDA"), "ALAMEDA 123", 2345678, "1995-09-10", "183", 90);
SELECT*FROM ALUNO;

/* Especificar em um parágrafo seu projeto e a utilização e quais suas regras 

O projeito feito seria para atender uma escola (seja de pequeno, médio ou grande porte).
As tabelas montadas seriam para armazenar dados dos alunos, instrutores, tirmas, atividades, matrículas, etc. 
Os dado foram inseridos primeiramente pelas atividades, em seguida inserimos os instrutores, então turmas e alunos.
*/