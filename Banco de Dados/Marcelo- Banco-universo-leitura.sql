CREATE SCHEMA UniversoLeitura;
USE UniversoLeitura;

CREATE TABLE UniversoLeitura.autores (
autores_codigo INT NOT NULL AUTO_INCREMENT,
autores_nome VARCHAR (100),
autores_sobrenome VARCHAR (100),
PRIMARY KEY (autores_codigo)
);

CREATE TABLE UniversoLeitura.editoras (
editoras_codigo INT NOT NULL AUTO_INCREMENT,
editoras_razao_social VARCHAR (150),
editoras_telefone VARCHAR (100),
PRIMARY KEY (editoras_codigo)
);

CREATE TABLE UniversoLeitura.associados (
associados_codigo INT NOT NULL AUTO_INCREMENT,
associados_rg CHAR (7),
associados_nome VARCHAR (50),
associados_sobrenome VARCHAR (50),
associados_endereco VARCHAR (50),
associados_cidade VARCHAR (150),
associados_estado VARCHAR (50),
PRIMARY KEY (associados_codigo)
);

CREATE TABLE UniversoLeitura.telefones (
telefone_codigo INT NOT NULL AUTO_INCREMENT,
telefone_socio CHAR (100),
telefone_codAssoc INT NOT NULL,
PRIMARY KEY (telefone_codigo)

);

CREATE TABLE emprestimos (
emprestimos_codigo INT NOT NULL AUTO_INCREMENT,
associados_codigo INT NOT NULL,
emprestimos_data DATE,
emprestimos_prazo_devolucao DATE,
emprestimos_data_devolucao DATE,
PRIMARY KEY (emprestimos_codigo),
CONSTRAINT FKassociados_codigo
FOREIGN KEY (associados_codigo)
REFERENCES UniversoLeitura.associados (associados_codigo)
);

CREATE TABLE emprestimos_exemplares (
emprestimos_exemplares_codigo INT NOT NULL AUTO_INCREMENT,
emprestimos_codigo INT NOT NULL,
exemplares_codigo INT NOT NULL,
PRIMARY KEY (emprestimos_exemplares_codigo),
CONSTRAINT FKemprestimos_codigo
FOREIGN KEY (emprestimos_codigo)
REFERENCES UniversoLeitura.emprestimos (emprestimos_codigo),
CONSTRAINT FKemprestimos_exemplar
FOREIGN KEY (exemplares_codigo)
REFERENCES UniversoLeitura.exemplares (exemplares_codigo)
);

CREATE TABLE exemplares (
exemplares_codigo INT NOT NULL AUTO_INCREMENT,
exemplares_codigo_livro INT NOT NULL,
exemplares_sinistro BOOL,
PRIMARY KEY (exemplares_codigo)
);

CREATE TABLE livros (
exemplares_codigo_livro INT NOT NULL AUTO_INCREMENT,
livros_codigo_ISBN VARCHAR (13),
livros_titulo VARCHAR (200),
livros_ano_criacao DATE,
autores_codigo INT NOT NULL,
livros_ano_publicacao DATE,
editoras_codigo INT NOT NULL,
PRIMARY KEY (exemplares_codigo_livro),
CONSTRAINT FKautores_codigo
FOREIGN KEY (autores_codigo)
REFERENCES UniversoLeitura.autores (autores_codigo),
CONSTRAINT FKeditoras_codigo
FOREIGN KEY (editoras_codigo)
REFERENCES UniversoLeitura.editoras (editoras_codigo)
);

INSERT INTO associados (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)
VALUE (01, 3468888, 'ANDRE', 'SOUZA', 'RUA DAS COUVES', 'SAO PAULO', 'SP');

INSERT INTO associados (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)
VALUE (02, 3468111, 'JOSE', 'ESTEVES', 'RUA DAS JUNTAS', 'MINAS GERAIS', 'MG');

INSERT INTO associados (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)
VALUE (03, 3468222, 'ALEXADRA', 'MOURA', 'RUA DOS AMORES', 'BAHIA', 'BA');

INSERT INTO associados (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)
VALUE (04, 3468333, 'MURILO', 'CALADO', 'ALAMEDA DAS ANDORINHAS', 'AMAZONAS', 'AM');

INSERT INTO associados (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)
VALUE (05, 3468666, 'JOANA', 'ALVES', 'RUA DAS BATATAS', 'CEARA', 'CE');

SELECT*FROM associados;

INSERT INTO telefones (associados_codigo, associados_rg, associados_nome, associados_sobrenome, associados_endereco, associados_cidade, associados_estado)


