-- Criar e usar o Banco de Dados

CREATE SCHEMA IF NOT EXISTS cardapio;
USE cardapio;

-- Tabela cardapio.categorias

CREATE TABLE IF NOT EXISTS cardapio.categorias (
  idCategoria INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(20) NULL,
  url_imagem VARCHAR(250) NULL,
  PRIMARY KEY (idCategoria));
  
-- Tabela cardapio.produtos

CREATE TABLE IF NOT EXISTS cardapio.produtos (
  idProduto INT NOT NULL AUTO_INCREMENT,
  idCategoria INT NOT NULL,
  nome VARCHAR(100) NULL,
  descricao VARCHAR(300) NULL,
  imagem VARCHAR(250) NULL,
  valor DECIMAL(5,2) NULL,
  PRIMARY KEY (idProduto),
  CONSTRAINT FKId_Cat
	FOREIGN KEY  (idCategoria)
        REFERENCES cardapio.categorias(idCategoria));
        
-- Tabela cardapio.clientes

CREATE TABLE IF NOT EXISTS cardapio.clientes (
  idCliente INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NULL,
  sobrenome VARCHAR(100) NULL,
  cpf CHAR NULL,
 nrCelular CHAR(15) NULL,
  email VARCHAR(150) NULL,
  PRIMARY KEY (idCliente));

-- Tabela cardapio.pedidos

CREATE TABLE IF NOT EXISTS cardapio.pedidos (
  idPedido INT NOT NULL AUTO_INCREMENT,
  idProduto INT NOT NULL,
  idCliente INT NOT NULL,
  quantidade INT NULL,
  precoTotal DECIMAL(7,2) NULL,
PRIMARY KEY (idPedido),
CONSTRAINT FKId_Prod
	FOREIGN KEY  (idProduto)
        REFERENCES cardapio.produtos(idProduto),
CONSTRAINT FKId_Cli
	FOREIGN KEY  (idCliente)
        REFERENCES cardapio.clientes(idCliente));
        
-- Tabela cardapio.vendas

CREATE TABLE IF NOT EXISTS cardapio.vendas (
  idVenda INT NOT NULL AUTO_INCREMENT,
  idPedido int NOT NULL,
  data_atual DATE,
  hora_atual TIME,
  Total DECIMAL(7,2) NULL,
PRIMARY KEY (idVenda),
CONSTRAINT FKId_Ped
	FOREIGN KEY  (idPedido)
        REFERENCES cardapio.pedidos(idPedido));
        
INSERT INTO CATEGORIAS (NOME, URL_IMAGEM)
VALUES ('COMIDA BAIANA', 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/04/Comida-bahiana-740x415.jpg');

INSERT INTO CATEGORIAS (NOME, URL_IMAGEM)
VALUES ('BEBIDA BAIANA', 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/04/Comida-bahiana-740x415.jpg');

INSERT INTO CATEGORIAS (NOME, URL_IMAGEM)
VALUES ('SOBREMESA BAIANA', 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/04/Comida-bahiana-740x415.jpg');

SELECT*FROM CATEGORIAS;

INSERT INTO PRODUTOS (IDCATEGORIA, NOME, DESCRICAO, IMAGEM, VALOR)
VALUES (1, 'CARURU', 'COZIDO DE QUIABO', 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/04/Comida-bahiana-740x415.jpg', 12.00);
INSERT INTO PRODUTOS (IDCATEGORIA, NOME, DESCRICAO, IMAGEM, VALOR)
VALUES (2, 'VATAPA', 'CAMARAO COM ARROZ', 'https://www.passagenspromo.com.br/blog/wp-content/uploads/2021/04/Comida-bahiana-740x415.jpg', 15.00);

SELECT*FROM PRODUTOS;

UPDATE PRODUTOS SET VALOR = 24.00 WHERE IDPRODUTO = 2;

DELETE FROM PRODUTOS WHERE IDPRODUTO >=1 AND IDPRODUTO <=11;