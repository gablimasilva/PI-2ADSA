CREATE DATABASE techfood;
USE techfood;

CREATE TABLE Empresa (
  idEmpresa INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  TecnicoResponsavel VARCHAR(45),
  RazaoSocial VARCHAR(45),
  CNPJEmpresa CHAR(20),
  EmailEmpresa VARCHAR(45),
  TelefoneEmpresa VARCHAR(15),
  SenhaEmpresa VARCHAR(45),
  CEP CHAR(10),
  Estado VARCHAR(45),
  Cidade VARCHAR(45),
  Bairro VARCHAR(45),
  Logradouro VARCHAR(45),
  Numero VARCHAR(45),
  Complemento VARCHAR(45)
);

CREATE TABLE Loja(
IdLoja INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
FkEmpresa INT,
foreign key (FkEmpresa) references empresa(IdEmpresa),
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
Email VARCHAR(45),
Telefone VARCHAR(15)
);

CREATE TABLE tipoComputador(
idTipo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
tipoComputador VARCHAR(45)
);

CREATE TABLE Computador(
idComputador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
fkLoja INT,
foreign key (fkLoja) references Loja(idLoja),
fkTipoComputador INT,
foreign key (fkTipoComputador) references tipoComputador(idTipo),
IpComputador VARCHAR(45),
senhaComputador varchar(45),
SistemaOperacional VARCHAR(45),
Hostname VARCHAR(45),
EnderecoMACComputador VARCHAR(45),
LocalComputador VARCHAR(45),
SenhaComputador VARCHAR(45)
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
foreign key (fkEmpresa) references Empresa(idEmpresa),
fkCargo INT,
foreign key (fkCargo) references cargo(idCargo),
nomeUsuario VARCHAR(45),
emailUsuario VARCHAR(45),
senhaUsuario VARCHAR(45)
);

Insert into tipoComputador VALUES 
(null,"Totem"),
(null,"Computador"),
(null,"Caixa");

CREATE TABLE componente(
	idComponente int primary key auto_increment,
    nomeComponente varchar(45)
    
);

insert into componente values
(null, 'CPU'),
(null, 'RAM'),
(null, 'HD'),
(null, 'SSD');

create table computadorComponente(
	idComputadorComponente int primary key auto_increment,
    fkComputador int,
    fkComponente int,
    totalComponente double,
    unidadeMedida varchar(45),
    foreign key (fkComputador) references computador(idComputador),
    foreign key (fkComponente) references componente(idComponente)
);

create table registroComponente(
	idRegistro int primary key auto_increment,
    fkComputadorComponente int,
    temperatura double,
    valorConsumido double,
    dataHora datetime,
    statusComputador datetime
);

SELECT * FROM Empresa;
SELECT * FROM Loja;
SELECT * FROM Computador;
SELECT * FROM Usuario;

DROP TABLE Loja;
DROP TABLE Empresa;