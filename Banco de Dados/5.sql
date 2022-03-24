use emarket;

select*from correios;
select*from clientes;
select*from faturas;


select c.Empresa from correios as c inner join faturas as f on f.ClienteID = c.Empresa;

 where f.DataFatura LIKE '%1996%';