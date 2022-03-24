/*EQUIPE 6

Diego Reis
Rhuam Bello Carneiro
Tawan Silva Souza
Marcelo Garofalo
Natanielly Jesus De Sousa*/

create database universo_leitura;

use universo_leitura;

create table editoras (
	codigo int not null auto_increment,
    razao_social varchar (150),
    telefone varchar (100),
    primary key (codigo)
);

create table autores (
	codigo int not null auto_increment,
    sobrenome varchar(100),
    nome varchar(100),
    primary key (codigo)
);

create table associados (
	codid int not null auto_increment,
    rg char(7),
    nome varchar(50),
    sobrenome varchar(50),
    endereco varchar(150),
    cidade varchar(50),
    estado varchar(2),
    primary key (codid)
);

create table telefones (
	telefoneid int not null auto_increment,
    telefone_socio varchar(100),
    codAssoc int not null,
    primary key (telefoneid),
    constraint FKAssociado foreign key (codAssoc) references associados(codid)
);

create table livros (
	cod int not null auto_increment,
    cod_ISBN varchar(13),
    titulo varchar(200),
    ano_criacao date,
    cod_autor int,
    ano_publicacao date,
    cod_editora int,
    primary key (cod),
    constraint foreign key (cod_autor) references autores(codigo),
    constraint foreign key (cod_editora) references editoras(codigo)
);


create table emprestimos (
	codigo int not null auto_increment,
    codAssoc int not null,
    data date,
    prazo_devolucao date,
    data_devolucao date,
    primary key (codigo),
    constraint FKAssociadoEmp foreign key (codAssoc) references associados(codid)
);

create table exemplares (
	codigo int not null auto_increment,
    cod_livro int not null,
    sinistro bool,
    primary key (codigo),
    constraint FKLivro foreign key (cod_livro) references livros(cod)
);

create table emprestimo_exemplares (
	codigo int not null auto_increment,
    cod_emprestimo int not null,
    cod_exemplar int,
    primary key (codigo),
    constraint FKexemplares foreign key (cod_exemplar) references exemplares(codigo)
);

-- ASSOCIADOS - 5 registros
insert into associados (rg, nome, sobrenome, endereco, cidade, estado) values (1234567,'Diego','Reis','Rua ABC','Salvador','BA');
insert into associados (rg, nome, sobrenome, endereco, cidade, estado) values (3254125,'Danilo','Reis','Rua XXX','Lauro de Freitas','BA');
insert into associados (rg, nome, sobrenome, endereco, cidade, estado) values (2318523,'Emsanoela','Dourado','Rua Conquista','João Dourado','BA');
insert into associados (rg, nome, sobrenome, endereco, cidade, estado) values (8746136,'Maria','de Fatima','Rua Brito','Ribeira do Pombal','BA');
insert into associados (rg, nome, sobrenome, endereco, cidade, estado) values (7654321,'Renato','Almeida','Rua Joga','Irecê','BA');

-- TELEFONES - 8 registros
insert into telefones (telefone_socio, codAssoc) values ('71988885555',1);
insert into telefones (telefone_socio, codAssoc) values ('71978885588',1);
insert into telefones (telefone_socio, codAssoc) values ('71988855123',2);
insert into telefones (telefone_socio, codAssoc) values ('75999885532',2);
insert into telefones (telefone_socio, codAssoc) values ('7133220123',3);
insert into telefones (telefone_socio, codAssoc) values ('7132817700',4);
insert into telefones (telefone_socio, codAssoc) values ('7454546666',5);
insert into telefones (telefone_socio, codAssoc) values ('71981045466',5);

-- AUTORES - 1 registro

insert into autores (sobrenome, nome) values ('Tolkien','John Ronald Reuel');
insert into autores (sobrenome, nome) values ('Marques','José Roberto');
insert into autores (sobrenome, nome) values ('Hill','Napoleon');
insert into autores (sobrenome, nome) values ('Clason','George S.');
insert into autores (sobrenome, nome) values ('Eker','T. Harv');


-- EDITORAS - 3 registros
insert into editoras (razao_social, telefone) values ('Arqueiro','1199551122');
insert into editoras (razao_social, telefone) values ('Sextante','1199885522');
insert into editoras (razao_social, telefone) values ('Rocco','71977441122');

-- LIVROS - 5 registros
insert into livros (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora) values ('12','Mindset Milionário','2020-01-01',2,'2020-01-01',1);
insert into livros (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora) values ('32','Mais Esperto que o Diabo','2020-01-01',3,'2020-01-01',2);
insert into livros (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora) values ('33','O Homem Mais Rico da Babilônia','2020-01-01',4,'2020-01-01',3);
insert into livros (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora) values ('56','Os Segredos da Mente Milionária','2020-01-01',5,'2020-01-01',3);
insert into livros (cod_ISBN, titulo, ano_criacao, cod_autor, ano_publicacao, cod_editora) values ('35','Box Trilogia O Senhor dos Anéis','2020-01-01',1,'2020-01-01',2);

-- EXEMPLARES - 5 registros
insert into exemplares (cod_livro, sinistro) values (1,0);
insert into exemplares (cod_livro, sinistro) values (5,0);
insert into exemplares (cod_livro, sinistro) values (2,1);
insert into exemplares (cod_livro, sinistro) values (3,0);
insert into exemplares (cod_livro, sinistro) values (4,0);

-- EMPRESTIMO_EXEMPLARES - 3 registros
insert into emprestimos (codAssoc, data, prazo_devolucao, data_devolucao) values (1,'2021-05-01','2021-05-10',null);
insert into emprestimos (codAssoc, data, prazo_devolucao, data_devolucao) values (2,'2021-01-01','2021-01-10',null);
insert into emprestimos (codAssoc, data, prazo_devolucao, data_devolucao) values (5,'2021-02-01','2021-02-10',null);

-- EMPRESTIMOS - 3 registros
insert into emprestimo_exemplares (cod_emprestimo, cod_exemplar) values (1,1);
insert into emprestimo_exemplares (cod_emprestimo, cod_exemplar) values (2,5);
insert into emprestimo_exemplares (cod_emprestimo, cod_exemplar) values (3,2);

-- DELETE
/*Tabela ASSOCIADOS
- Excluir um asssociado.*/

delete from associados where codid = 4;

-- não permite excluir por conta do registro na tabela de telefones! 

/*Tabela LIVROS
- Tente excluir um livro que possui um exemplar associado a ele. O que
acontece nesse caso?*/

delete from livros where cod = 1;

-- mesma coisa do exemplo de associados
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`universo_leitura`.`exemplares`, CONSTRAINT `FKLivro` FOREIGN KEY (`cod_livro`) REFERENCES `livros` (`cod`))	0.016 sec

-- UPDATE
/*Tabela ASSOCIADO
- Um associado pede que você atualize seu endereço para "Rua das Flores, 860". Atualize o registro número 03*/

update associados set endereco = 'Rua das Flores, 860' where codid = 3;


