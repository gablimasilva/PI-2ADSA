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
SistemaOperacional VARCHAR(45),
Hostname VARCHAR(45),
EnderecoMACComputador VARCHAR(45),
LocalComputador VARCHAR(45)
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

DROP TABLE Loja;
DROP TABLE Empresa;
SELECT * FROM Empresa;
SELECT * FROM Loja;
SELECT * FROM Computador;
SELECT * FROM Usuario;

INSERT INTO empresa values
(null, 'Carlos José', 'Totem Max', '12.412.421/0001-01', 'totemmax@email.com', '(11)3333-3333', '123456', '33.333-555', 'São Paulo', 'São Paulo', 'Bela Vista', 'Rua das Magnólias', '123', 'bloco 2');

insert into loja values
(null, 1, 'Arcos Dourados', 'Patricia', '12.123.456/0003-58', '12.255-100', 'Bahia', 'Salvador', 'Solar', 'Avenida Sol', '123', 'loja 5', 'arcos@mc.com', '(51)5555-5555');

insert into computador values
(null, 1, 1, '123.123.123', 'Linux', 'totem1', '123.456.789', 'salão');

insert into computador values
(null, 1, 1, '123.123.000', 'Linux', 'totem2', '123.456.000', 'salão');