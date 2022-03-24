use emarket;

select*from produtos where produtonome like '%spread%';

select*from clientes where contato like 'Y%';

select ProdutoNome, PrecoUnitario from produtos order by PrecoUnitario desc limit 5;

select Contato, concat(Endereco, ' ' , Cidade) Endereço from clientes where Cidade = "London";

select concat(Nome, ' ' , Sobrenome) as Nome, sum(Transporte) as TotalTrasnporte from empregados inner join faturas on empregados.EmpregadoID = faturas.EmpregadoID
group by empregados.EmpregadoID order by TotalTrasnporte desc;

select DataFatura from faturas order by DataFatura desc limit 1;

select ProdutoNome, PrecoUnitario from produtos order by PrecoUnitario asc limit 1;

select ProdutoNome, PrecoUnitario, sum(Quantidade) as QTD from produtos inner join detalhefatura on produtos.ProdutoID = detalhefatura.ProdutoID
group by detalhefatura.ProdutoID;

