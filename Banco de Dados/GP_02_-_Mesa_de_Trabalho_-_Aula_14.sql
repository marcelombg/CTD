/*
----- PG WORKBENCH - CLASS 14
GRUPO 2: Filipe Farias, Marcelo Garofalo, Alcilene Reis, Rhuam Bello, Lucas Fontenele, Uerber James
*/

-- 01
SELECT
	artistas.nome AS "Artista",
    albuns.titulo AS "Álbum"
    FROM artistas
    INNER JOIN albuns
    ON artistas.id = albuns.id_artista
    ORDER BY artistas.id;

-- 02
SELECT
	clientes.nome AS "Nome do Cliente",
    faturas.valor_total AS "Valor da Fatura"
    FROM clientes
    INNER JOIN faturas
    ON clientes.id = faturas.id_cliente
    HAVING faturas.valor_total > 5
    ORDER BY faturas.valor_total DESC;

-- 03
SELECT
	cancoes.nome AS "Nome da Música",
    tipos_de_arquivo.nome AS "Tipo de Arquivo"
    FROM cancoes
    INNER JOIN tipos_de_arquivo
    ON cancoes.id_tipo_de_arquivo = tipos_de_arquivo.id
    ORDER BY cancoes.id;