CREATE DATABASE techfood;
USE techfood;

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	RazaoSocial VARCHAR(45),
	CNPJEmpresa CHAR(20),
	EmailEmpresa VARCHAR(45),
	telefoneEmpresa VARCHAR(15),
	SenhaEmpresa VARCHAR(45),
	CEP CHAR(10),
	Estado VARCHAR(45),
	Cidade VARCHAR(45),
	Bairro VARCHAR(45),
	Logradouro VARCHAR(45),
	Numero VARCHAR(45),
	Complemento VARCHAR(45),
	TecnicoResponsavel VARCHAR(45)
);

CREATE TABLE loja(
	idLoja INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	fkEmpresa INT,
		foreign key (fkEmpresa) references empresa(idEmpresa),
	RazaoSocial VARCHAR(45),
	GerenteLoja VARCHAR(45),
	CNPJLoja VARCHAR(45),
	CEPLoja CHAR(10),
	Estado VARCHAR(45),
	Cidade VARCHAR(45),
	Bairro VARCHAR(45),
	Logradouro VARCHAR(45),
	NumeroRua VARCHAR(45),
	Complemento VARCHAR(45),
	EmailLoja VARCHAR(45),
	Telefone VARCHAR(15)
);

CREATE TABLE tipoComputador(
	idTipoComputador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nomeTipoComputador VARCHAR(45)
);

Insert into tipoComputador VALUES 
(null,"Totem"),
(null,"Computador"),
(null,"Caixa");

CREATE TABLE computador(
	idComputador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	fkLoja INT,
		foreign key (fkLoja) references Loja(idLoja),
	fkTipoComputador INT,
		foreign key (fkTipoComputador) references tipoComputador(idTipoComputador),
	IpComputador VARCHAR(45),
	SistemaOperacional VARCHAR(45),
	HostnameComputador VARCHAR(45),
	EnderecoMACComputador VARCHAR(45),
	LocalComputador VARCHAR(45),
	senhaComputador VARCHAR(45)
);

CREATE TABLE cargo(
	idCargo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nomeCargo VARCHAR(45)
);

INSERT INTO cargo VALUES
(null,"Gerente"),
(null,"Analista"),
(null,"Colaborador");

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	fkEmpresa INT,
		foreign key (fkEmpresa) references empresa(idEmpresa),
	fkCargo INT,
		foreign key (fkCargo) references cargo(idCargo),
	nomeUsuario VARCHAR(45),
	emailUsuario VARCHAR(45),
	senhaUsuario VARCHAR(45)
);

CREATE TABLE componente(
	idComponente int primary key not null auto_increment,
    nomeComponente varchar(45)
);

insert into componente values
(null, 'CPU'),
(null, 'RAM'),
(null, 'Disco');

CREATE TABLE computadorComponente(
	idComputadorComponente int primary key not null auto_increment,
    fkComputador int,
    foreign key (fkComputador) references computador(idComputador),
    fkComponente int,
    foreign key (fkComponente) references componente(idComponente),
    TotalComponente float,
    UnidadeDeMedida varchar(45)
);

CREATE TABLE registroComponente(
	idRegistroComponente int primary key not null auto_increment,
    fkComputadorComponente int,
    foreign key (fkComputadorComponente) references computadorComponente(idComputadorComponente),
    temperatura float,
    ValorConsumido float,
    DataHora datetime,
    statusComputador varchar(45)
);

CREATE TABLE incidentes(
	idIncidentes int primary key not null auto_increment,
    fkRegistroComponente int,
    foreign key (fkRegistroComponente) references registroComponente(idRegistroComponente),
    dataHora datetime,
    descricao varchar(45)
);






INSERT INTO empresa values
(null, 'Totem Max', '12.412.421/0001-01', 'totemmax@email.com', '(11)3333-3333', '123456', '33.333-555', 'São Paulo', 'São Paulo', 'Bela Vista', 'Rua das Magnólias', '123', 'bloco 2', 'Carlos José');

insert into loja values
(null, 1, 'Arcos Dourados', 'Patricia', '12.123.456/0003-58', '12.255-100', 'Bahia', 'Salvador', 'Solar', 'Avenida Sol', '123', 'loja 5', 'arcos@mc.com', '(51)5555-5555');

insert into computador values
(null, 1, 1, '121212121212', 'Linux', 'totem1', '131313131313', 'salão', '12345');

insert into computadorComponente values
(null, 1, 1, 3.2, 'GHz'),
(null, 1, 2, 8192, 'MiB'),
(null, 1, 3, 256000, 'MiB');

insert into registroComponente values
(null, 1, 35.6, 0.8, null, 'ligado');

insert into registroComponente values
(null, 2, 35.6, 52, null, 'ligado');

insert into registroComponente values
(null, 2, 35.6, 100, null, 'ligado');



-- drop database techfood;