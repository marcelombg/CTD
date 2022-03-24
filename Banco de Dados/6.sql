use emarket;

/* 1 - Crie uma view para que você possa organizar remessas de faturas.
Indicar número da  fatura,  data da fatura e data de  envio, 
no formato dd/mm/yy, valor de  transporte  formatado em dois locais decimais 
e informações de endereço de destino, incluindo endereço, cidade,  
código postal e país, em uma coluna chamada Destino.
*/

create view DetalheEnvio as
select  FaturaId, date_format(DataFatura, "%d %m %y") as DataFatura, date_format(DataEnvio, "%d %m %y") as DataEnvio,
format(Transporte, 2), concat(EnderecoEnvio, ",", CidadeEnvio, ",", CodigoPostalEnvio,
 ",", PaisEnvio) as Destino
from faturas;

select*from DetalheEnvio;

create view DetalheEnvio as
select  FaturaId, date_format(DataFatura, "%d %m %y") as DataFatura, date_format(DataEnvio, "%d %m %y") as DataEnvio,
round(Transporte, 2), concat(EnderecoEnvio, ",", CidadeEnvio, ",", CodigoPostalEnvio,
 ",", PaisEnvio) as Destino
from faturas;

select*from DetalheEnvio;

/*
Faça uma consulta com todos os empresas de correios e os detalhes das  faturas que usaram essa empresa.  Use  a  View  criada.
*/

select co.Empresa, DetalheEnvio.FaturaID from correios co
inner join faturas f on f.FormaEnvio = co.CorreioID
inner join DetalheEnvio on DetalheEnvio.FaturaID = f.FaturaId;

/*
Crie uma view com um detalhe dos  produtos em estoque. 
Indicar id, nome do produto, nome da categoria e preço unitário.   
*/
create view DetalhesProdutosEstoque as
select p.ProdutoID, p.ProdutoNome, cat.CategoriaNome, p.PrecoUnitario from categorias cat
left join produtos p on cat.CategoriaID = p.CategoriaID
where p.UnidadesEstoque > 0;

select*from DetalhesProdutosEstoque;

/*Escreva uma consulta que liste o nome e  a categoria de todos os produtos  vendidos.
Use a  View  criada.*/

select*from detalhefatura;

select dpe.ProdutoNome, dpe.CategoriaNome from detalhefatura df
inner join DetalhesProdutosEstoque dpe on df.ProdutoID = dpe.ProdutoID;

CREATE VIEW DetalhesProdutos AS
SELECT p.ProdutoID,
p.ProdutoNome,
c.CategoriaNome,
p.PrecoUnitario
FROM produtos AS p
RIGHT JOIN categorias AS c
ON p.CategoriaID = c.CategoriaID
WHERE p.UnidadesEstoque >= 1;

#4 Escreva uma consulta que liste o nome e a categoria de todos os produtos  vendidos.  Use a  View  criada.

SELECT ProdutoID from DetalhesProdutos;
SELECT "Nome da Categoria" from DetalhesProdutos;