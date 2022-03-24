use emarket;

select*from clientes;

select distinct substring_index (c.contato, ' ', 1) as Contato,
substring_index (c.contato, ' ', 1) as Sobrenome,
upper(c.Titulo) as Titulo from clientes as c
inner join faturas as f on c.ClienteID = f.ClienteID
where f.DataFatura LIKE '%1996%';

select concat('00000000', FaturaID) from faturas;

select right(concat('00000000', FaturaID),8) from faturas;

select lpad(FaturaId, 8, 0) as Id,
date_format(f.DataFatura, '%d-%m-%Y' ) as DataFat,
c.Pais as Pais,
c.Cidade as 'Cidade Cliente',
f.CidadeEnvio as 'Cidade Fatura'
from faturas as f
inner join clientes as c on c.ClienteID = f.ClienteID
where c.Cidade <> f.CidadeEnvio and c.Pais = 'UK';