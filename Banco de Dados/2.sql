use emarket;

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

