-- EQUIPE 4
-- Marcelo Garofalo
-- Diego Reis
-- Matheus Rodrigues De Almeida
-- Michel Picozzi
-- Joaderson Felipe Silva Barbosa
-- Renan Miranda

use projeto_spotify;

-- 2-Liste as músicas que possuem a letra "z" no título.
select*from cancao where titulo like '%z%' order by titulo asc;

-- 3-Liste as músicas que têm a letra "a" como segundo caractere e a letra "s" como último caractere.
select*from cancao where titulo like '_a%' and titulo like '%s' order by titulo asc;

-- 4-Mostre a lista de reprodução que contém mais músicas, renomeando as colunas, colocando em maiúscula a primeira letra, os acentos correspondentes e adicionando os espaços entre as palavras.
select idPlaylist as "Id Playlist", idusuario as "Id Usuário", titulo as "Título", qtdcancoes as "Quantidade de Canções", idestado as "Id Estado", Datacriacao as "Data de Criação", Dataexclusao as "Data de Exclusão" from playlist order by qtdcancoes desc limit 1; 

-- 5-Em outro momento, obtenha uma lista com os 5 usuários mais jovens, a partir dos próximos 10 registros.
select*from usuario order by Data_nac desc limit 5 offset 10;

-- 6-Liste as 5 músicas com mais reproduções, em ordem decrescente.
select*from cancao order by qtdreproducao desc limit 5;

-- 7-Gere um relatório de todos os álbuns em ordem alfabética.
select titulo from album order by titulo asc;

-- 8-Liste todos os álbuns que não possuem imagem, organizados em ordem alfabética.
select titulo from album where imagemcapa is null order by titulo;

-- 9-Insira um novo usuário com os seguintes dados (leve em consideração os relacionamentos):
	-- a nomeusuario: novousuariodespotify@gmail.com
	-- b Nome e sobrenome: Elmer Santos 
	-- c password: S4321m
	-- d Data de nacimiento: 15/11/1991
	-- e Sexo: Masculino
	-- f Código Postal: B4129ATF
	-- g País: Brasil
insert into usuario (idUsuario, Nomeusuario, NomeCompleto, Data_nac, sexo, Cod, senha, Pais_idPais, IdTipoUsuario)
values (20, "novousuariodespotify@gmail.com", upper("Elmer Santos"), "1975-09-27", 'M', 'B4129ATF','S4321m',9,1);    

insert into passwordxusuario (idPasswordxUsuario, idUsuario, Password, Data, PasswordxUsuariocol) 
values (57, 20, 'S4321m', sysdate(),null);             
select*from usuario;

-- 10.  Exclua todas as músicas do gênero "pop".
delete from generoxcancao where IdGenero = 9;
select*from generoxcancao;

-- 11.   Edite todos os artistas que não possuem uma imagem carregada e carregue para eles o texto "Imagem em falta" na coluna de imagens.
update artista set IMAGEM = "Imagem em falta" where IMAGEM is null;
select*from artista where imagem like 'Imagem em falta';