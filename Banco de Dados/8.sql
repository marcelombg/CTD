use emarket;

/*3) Clientes por país
Crie uma SP que recebe o nome de um país e retorne o número de clientes naquele país.
Invoque a SP para consultar a quantidade de clientes de Portugal.*/

select*from clientes;

delimiter $$
create procedure sp_nomePais_numeroClientes(in nome_pais varchar(20), out numero_clientes int)
begin 
select count(ClienteID) into numero_clientes from clientes where Pais = nome_pais;
end$$

delimiter ;
call sp_nomePais_numeroClientes ('Portugal', @numero_clientes);
select @numero_clientes;
-- ----------------------------------------------------------------------------------------------------

/*4) Produtos sem estoque
Crie uma SP que receba um número e liste os produtos cujo estoque está abaixo desse número. O resultado deve mostrar o nome do produto, o Estoque atual e o nome da categoria à qual o produto pertence.
Liste os produtos com menos de 10 unidades no estoque;
Liste os produtos sem estoque.*/

drop procedure if exists sp_numeros_estoque_baixo;

delimiter $$
create procedure sp_numeros_estoque_baixo(in estoque_baixo int)
begin 
select p.ProdutoNome, p.UnidadesEstoque, c.CategoriaNome from produtos p 
inner join categorias c on p.CategoriaID = c.CategoriaID where p.UnidadesEstoque <= estoque_baixo;
end$$

delimiter ;
call sp_numeros_estoque_baixo(5);

-- ----------------------------------------------------------------------------------------------------

drop procedure if exists sp_nome_procedimento;

delimiter $$
create procedure sp_nome_procedimento(inout salario float)
begin 
update clientes into ;
set salario = salario + 25700.50;
end$$

delimiter ;

set @salario = 2000.00;
select @salario;
call sp_nome_procedimento(@salario);
select @salario;
set @salario = 2000.00;
call sp_nome_procedimento(@salario);
select @salario;
