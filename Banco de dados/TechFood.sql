CREATE DATABASE TechFood;

use TechFood;
-- -----------------------------------------------------
-- Table `mydb`.`Empresa`
-- -----------------------------------------------------
CREATE TABLE Empresa (
  idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
  TecnicoResponsavel VARCHAR(100),
  RazaoSocial VARCHAR(100),
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
  Complemento VARCHAR(45));
  


-- -----------------------------------------------------
-- Table `Loja`
-- -----------------------------------------------------
CREATE TABLE Loja (
  idLoja INT primary key AUTO_INCREMENT,
  fkEmpresa INT,
  foreign key (fkEmpresa)references empresa(idEmpresa),
  RazaoSocial VARCHAR(100),
  GerenteLoja VARCHAR(100),
  CNPJLoja CHAR(20),
  CEPLoja CHAR(10),
  Estado VARCHAR(45),
  Cidade VARCHAR(45),
  Bairro VARCHAR(45),
  Logradouro VARCHAR(45),
  NumeroRua INT,
  Complemento VARCHAR(45),
  EmailLoja VARCHAR(45),
  Telefone VARCHAR(15));


-- -----------------------------------------------------
-- Table `mydb`.`tipoComputador`
-- -----------------------------------------------------
CREATE TABLE tipoComputador (
  idTipoComputador INT primary KEY auto_increment,
  nomeTipoComputador VARCHAR(45));

-- -----------------------------------------------------
-- Table `Computador`
-- -----------------------------------------------------
CREATE TABLE Computador (
  idComputador INT primary key AUTO_INCREMENT,
  fkLoja INT,
  foreign key (fkLoja) references loja(idloja),
  fkTipoComputador INT,
  foreign key (fkTipoComputador) references tipoComputador(idTipoComputador),
  IpComputador VARCHAR(45),
  SistemaOperacional VARCHAR(45),
  HostnameComputador VARCHAR(45),
  EnderecoMACComputador VARCHAR(45),
  LocalComputador VARCHAR(45));
  
-- -----------------------------------------------------
-- Table `mydb`.`Componente`
-- -----------------------------------------------------
CREATE TABLE Componente (
  idComponente INT primary KEY auto_increment,
  NomeComponente VARCHAR(45));

-- -----------------------------------------------------
-- Table `ComputadorComponente`
-- -----------------------------------------------------
CREATE TABLE ComputadorComponente (
  idComputadorComponente INT primary KEY auto_increment,
  fkComputador INT,
  foreign key (fkComputador) references computador(idComputador),
  fkComponente INT,
  foreign key (fkComputador) references componente(idComponente),
  TotalComponente DOUBLE,
  UnidadeDeMedida VARCHAR(45));
  
-- -----------------------------------------------------
-- Table `mydb`.`RegistroComponente`
-- -----------------------------------------------------
CREATE TABLE RegistroComponente (
  idRegistroComponente INT primary key AUTO_INCREMENT,
  fkComputadorComponente INT,
  foreign key (fkComputadorComponente) references ComputadorComponente(idComputadorComponente),
  temperatura DOUBLE,
  ValorConsumido DOUBLE,
  DataHora DATETIME,
  statusComputador VARCHAR(45));

-- -----------------------------------------------------
-- Table `cargo`
-- -----------------------------------------------------
CREATE TABLE cargo (
  idCargo INT primary key auto_increment,
  nomeCargo VARCHAR(45));

-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
CREATE TABLE usuario (
  idUsuario INT primary key auto_increment,
  fkEmpresa INT,
  foreign key (fkEmpresa) references empresa(idEmpresa),
  fkCargo INT,
  foreign key (fkCargo) references cargo(idCargo),
  nomeUsuario VARCHAR(100),
  emailUsuario VARCHAR(100),
  senhaUsuario VARCHAR(100));

-- inserts

insert into cargo values 
(null, "Gerente"),
(null, "Analista"),
(null, "Colaborador");

insert into TipoComputador values
(null,"totem"),
(null,"Computador"),
(null,"Caixa");

insert into componente values
(null,"CPU"),
(null,"RAM"),
(null,"HD"),
(null,"SSD");

-- Selects

select * from empresa;
select * from loja;
select * from tipoComputador;
select * from Componente;
select * from ComputadorComponente;
select * from RegistroComponente;
select * from cargo;
select * from usuario;





