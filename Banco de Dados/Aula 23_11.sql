SELECT*FROM genero;

SELECT*FROM generoXcancao WHERE idGenero = 1;

SELECT*FROM cancao;

ALTER TABLE playlistXcancao DROP constraint Idcancao;
ALTER TABLE generoXcancao DROP constraint Cancao;
DELETE cancao FROM cancao inner join generoXcancao ON cancao.idcancao = generoxcancao.Idcancao where (generoxcancao.IdGenero=9);