use emarket;

select*from faturas;

select DataFatura from faturas;

select count(DataFatura) from faturas;
select max(DataFatura) from faturas;
select min(DataFatura) from faturas;
select sum(PrecoUnitario) from detalhefatura;
select sum(UnidadesEstoque) from produtos;
select avg(PrecoUnitario) from produtos;
select std(PrecoUnitario) from produtos;
select produtoNome, precoUnitario from produtos where PrecoUnitario > (select avg(PrecoUnitario) from produtos);


select date_format(DataFatura, "%D %M %Y") from faturas;
select date_format(DataFatura, "%d %m %y") from faturas;

