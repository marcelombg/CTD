create schema spotify;

use spotify;

create table usuario (
	idUsuario int not null auto_increment,
    nomeusuario varchar(45) not null,
    data_nac date,
    sexo varchar(1),
    email VARCHAR(150),
    senha varchar(45),
    primary key (idUsuario)
);

create table playlist (
	idPlaylist int not null auto_increment,
    idusuario int not null,
    titulo varchar (45),
    qtdcancoes int,
    datacriacao datetime,
    primary key (idPlaylist),
    constraint FKusuarioPlaylist foreign key (idusuario) references usuario(idUsuario)
);

create table artista (
	idArtista int not null auto_increment,
    nome varchar(45) not null,
    sobrenome varchar(100),
    primary key (idArtista)
);

create table album (
	idAlbum int not null auto_increment,
    titulo varchar(45) not null,
    idArtista int not null,
    primary key (idAlbum),
    constraint FKalbumArtista foreign key (idArtista) references artista(idArtista)
);

create table cancoes (
	idCancao int not null auto_increment,
    titulo varchar(45) not null,
    duracao double not null,
    qtdreproducao int,
    qtdlikes int,
    idalbum int not null,
    primary key (idCancao),
    constraint FKcancaoAlbum foreign key (idalbum) references album(idalbum)
);

create table playlist_cancao (
	idPlaylist_Cancao int not null auto_increment,
    Idcancao int not null,
    IdPlaylist int not null,
    primary key (idPlaylist_Cancao),
    constraint FKplaylistCancaoCancao foreign key (Idcancao) references cancoes(idCancao),
    constraint FKplaylistCancaoPlaylist foreign key (IdPlaylist) references playlist(IdPlaylist)
);

create table genero (
	idGenero int not null auto_increment,
    genero varchar(45),
    primary key (idGenero)
);

create table generocancao (
	idGeneroCancao int not null auto_increment,
    idCancao int not null,
    idGenero int not null,
    primary key (idGeneroCancao),
    constraint FKgeneroCancaoCancao foreign key (idCancao) references cancoes(idCancao),
    constraint FKgeneroCancaoGenero foreign key (idGenero) references genero(idGenero)
);

-- Insira 3 registros nas tabelas usuario, cancoes e album.

insert into usuario (nomeusuario, data_nac, sexo, email, senha) values ('Diego Reis','1986-09-10','M','diego@mail.com','123456789');
insert into usuario (nomeusuario, data_nac, sexo, email, senha) values ('Rhuam Bello Carneiro','1989-01-01','M','rhuan@mail.com','321@##321');
insert into usuario (nomeusuario, data_nac, sexo, email, senha) values ('Denis Galdino','1980-02-04','M','denis@mail.com','3864ff132132');
insert into usuario (nomeusuario, data_nac, sexo, email, senha) values ('Tawan Silva Souza','1981-05-12','M','tawan@mail.com','35416s13');
insert into usuario (nomeusuario, data_nac, sexo, email, senha) values ('Marcelo Garofalo','1999-04-08','M','marcelo@mail.com','351640345sd');

insert into artista (nome, sobrenome) values ('Iron Maiden',null);
insert into artista (nome, sobrenome) values ('System of a Down',null);

insert into album (titulo, idArtista) values ('Hypnotize',2);
insert into album (titulo, idArtista) values ('Mezmerize',2);
insert into album (titulo, idArtista) values ('Toxicity',2);
insert into album (titulo, idArtista) values ('Fear of the Dark',1);
insert into album (titulo, idArtista) values ('Killers',1);

insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('Be Quick or Be Dead',03.23,null,null,4);
insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('From Here to Eternity',03.28,null,null,4);
insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('Afraid to Shoot Strangers',06.56,null,null,4);
insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('Wasting Love',05.51,null,null,4);
insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('Childhoods End',04.40,null,null,4);
insert into cancoes (titulo, duracao, qtdreproducao, qtdlikes, idalbum) values ('Fear of the Dark',07.18,null,null,4);