use musimundos;

/*Crie uma view chamada FATURAS_NACIONAIS. 
A view deve ter as seguintes colunas: id da fatura, data da fatura, id do cliente, nome do cliente, sobrenome do cliente e total da fatura, 
e deve incluir apenas faturas do Brasil (Brazil). Em seguida, execute SELECT * FROM FATURAS_NACIONAIS. Quantos registros a consulta retorna?*/

select*from faturas;
create view FATURAS_NACIONAIS as
select id, data_fatura, id_cliente, valor_total, pais_cobranca from faturas f where pais_cobranca = "Brazil";
select*from FATURAS_NACIONAIS;


select*from generos;
select*from cancoes;
select*from albuns;
create view LATINOS as 
select compositor, id_album, nome from cancoes where id_genero = 7;
select*from LATINOS;
