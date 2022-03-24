-- QUERY SPOTIFY MARCELO GAROFALO

CREATE SCHEMA spotify;
USE spotify;

CREATE TABLE usuario (
id_usuario INT NOT NULL AUTO_INCREMENT,
nome_usuario VARCHAR (45) NOT NULL,
data_nac_usuario DATE,
sexo_usuario VARCHAR (1),
email_usuario VARCHAR (150),
senha_usuario VARCHAR (45),
PRIMARY KEY (id_usuario)
);

CREATE TABLE playlist (
id_playlist INT NOT NULL AUTO_INCREMENT,
id_usuario INT NOT NULL,
titulo_playlist VARCHAR (45),
qtd_cancoes_playlist INT NOT NULL,
data_criacao_playlist DATETIME,
PRIMARY KEY (id_playlist),
CONSTRAINT FKid_usuario
FOREIGN KEY (id_usuario)
REFERENCES spotify.usuario (id_usuario)
);

CREATE TABLE artista (
id_artista INT NOT NULL AUTO_INCREMENT,
nome_artista VARCHAR (45),
sobrenome_artista VARCHAR (100),
PRIMARY KEY (id_artista)
);

CREATE TABLE album  (
id_album INT NOT NULL AUTO_INCREMENT,
titulo_album VARCHAR (45),
id_artista INT NOT NULL,
PRIMARY KEY (id_album),
CONSTRAINT FKid_artista
FOREIGN KEY (id_artista)
REFERENCES spotify.artista (id_artista)
);

CREATE TABLE genero (
id_genero INT NOT NULL AUTO_INCREMENT,
nome_genero VARCHAR (45),
PRIMARY KEY (id_genero)
);

CREATE TABLE cancoes  (
id_cancao INT NOT NULL AUTO_INCREMENT,
titulo_album VARCHAR (45),
duracao_cancao DOUBLE,
qtd_reproducao_cancao INT NOT NULL,
qtd_likes_cancao INT NOT NULL,
id_album INT NOT NULL,
PRIMARY KEY (id_cancao),
CONSTRAINT FKid_album
FOREIGN KEY (id_album)
REFERENCES spotify.album (id_album)
);

CREATE TABLE playlist_cancao (
id_playlist_cancao INT NOT NULL AUTO_INCREMENT,
id_cancao INT NOT NULL,
id_playlist INT NOT NULL,
PRIMARY KEY (id_playlist_cancao),
CONSTRAINT FKid_playlist
FOREIGN KEY (id_playlist)
REFERENCES spotify.playlist (id_playlist),
CONSTRAINT FKid_cancao
FOREIGN KEY (id_cancao)
REFERENCES spotify.cancoes (id_cancao)
);

CREATE TABLE genero_cancao  (
id_genero_cancao INT NOT NULL AUTO_INCREMENT,
id_cancao INT NOT NULL,
id_genero INT NOT NULL,
PRIMARY KEY (id_genero_cancao),
CONSTRAINT FKid_genero
FOREIGN KEY (id_genero)
REFERENCES spotify.genero (id_genero),
CONSTRAINT FKid_cancoes
FOREIGN KEY (id_cancao)
REFERENCES spotify.cancoes (id_cancao)
);

INSERT INTO usuario (id_usuario, nome_usuario, data_nac_usuario, sexo_usuario, email_usuario, senha_usuario)
VALUE (001, 'JOAO', '1951-02-21', 'M', 'JOAO@GMAIL.COM', '12345');
INSERT INTO usuario (id_usuario, nome_usuario, data_nac_usuario, sexo_usuario, email_usuario, senha_usuario)
VALUE (002, 'JOANA', '1980-08-12', 'F', 'JOANA@GMAIL.COM', '12346');
INSERT INTO usuario (id_usuario, nome_usuario, data_nac_usuario, sexo_usuario, email_usuario, senha_usuario)
VALUE (003, 'JULIO', '1985-10-15', 'M', 'JULIO@GMAIL.COM', '12347');
SELECT*FROM usuario;

INSERT INTO artista (id_artista, nome_artista, sobrenome_artista)
VALUE (001, 'COREY', 'TAYLOR');
INSERT INTO artista (id_artista, nome_artista, sobrenome_artista)
VALUE (002, 'CHAD', 'GRAY');
INSERT INTO artista (id_artista, nome_artista, sobrenome_artista)
VALUE (003, 'JESSE', 'LEACH');


INSERT INTO album (id_album, titulo_album, id_artista)
VALUE (001, 'IOWA', 001);
INSERT INTO album (id_album, titulo_album, id_artista)
VALUE (002, 'LD50', 002);
INSERT INTO album (id_album, titulo_album, id_artista)
VALUE (003, 'ALIVE OR JUST BREATHING', 003);

INSERT INTO cancoes (id_cancao, titulo_album, duracao_cancao, qtd_reproducao_cancao, qtd_likes_cancao, id_album)
VALUE (001, 'IOWA', 03.10, 1, 15, 001);
INSERT INTO cancoes (id_cancao, titulo_album, duracao_cancao, qtd_reproducao_cancao, qtd_likes_cancao, id_album)
VALUE (002, 'LD50', 03.58, 1, 16, 002);
INSERT INTO cancoes (id_cancao, titulo_album, duracao_cancao, qtd_reproducao_cancao, qtd_likes_cancao, id_album)
VALUE (003, 'ALIVE OR JUST BREATHING', 02.10, 1, 17, 003);

SELECT*FROM artista INNER JOIN album INNER JOIN cancoes;