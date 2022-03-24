-- EQUIPE 3
-- Marcelo Garofalo, Michel Picozzi, Rodolfo Alves, Tiago Guerreiro, Joaderson Felipe Silva Barbosa, Manuel Jose Pinero

-- Exercícios
-- Usando a base musimundos_V2, execute as seguintes consultas:
use musimundos;

-- 1 - Selecione o nome dos artistas(tabela artistas) com o nome de seus albuns (tabela albuns) ordenado por id do artista.
select artistas.nome from artistas 
inner join produtos on provedores.ProvedorID = produtos.ProvedorID 
group by provedores.Pais;

-- 2 - Selecione o nome do cliente (clientes) e suas faturas (faturas), porém somente as faturas com valor maior de 5 ordenados pelo valor da fatura decrescente.


-- 3 Selecione o nome das cancoes (tabela cancoes) e o tipo de arquivo (tabela tipos_de_arquivos) e exiba o nome da canção e o tipo ordenado pelo id da canção.



select*from provedores;
select*from produtos;

select provedores.Pais, produtos.ProdutoNome, max(produtos.PrecoUnitario) from provedores
inner join produtos on provedores.ProvedorID = produtos.ProvedorID 
group by provedores.Pais;

select provedores.Pais, produtos.ProdutoNome, max(produtos.PrecoUnitario) from provedores
inner join produtos on provedores.ProvedorID = produtos.ProvedorID 
where produtos.PrecoUnitario > (select avg(produtos.PrecoUnitario) from produtos);

select provedores.Pais, max(produtos.PrecoUnitario) 
from provedores
inner join produtos
on provedores.ProvedorID = produtos.ProvedorID 
where produtos.PrecoUnitario > (select avg(produtos.PrecoUnitario) from produtos)
group by provedores.Pais
having provedores.Pais = "USA";

