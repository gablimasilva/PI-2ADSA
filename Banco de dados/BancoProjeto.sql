

CREATE DATABASE TOTAN;

USE TOTEN ;
-- -----------------------------------------------------
CREATE TABLE Loja (
  idLoja  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  NomeLojaMatrix VARCHAR(45) NULL,
  EmailMatrix VARCHAR(45) NULL,
  TelefoneMatrix CHAR(10) NULL
)auto_increment 100;


-- -----------------------------------------------------
-- Table filial`
-- -----------------------------------------------------
CREATE TABLE  filial (
  idFilial INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  NomeFilial VARCHAR(45) NULL,
  TelefoneFixo VARCHAR(9) NULL,
  Cep CHAR(9) NULL,
  NomeRua VARCHAR(45) NULL,
  NumeroRua CHAR(8) NULL,
  NumeroFilial CHAR(8) NULL,
  EmailFilial VARCHAR(45) NULL,
  fkLoja INT,
  FOREIGN KEY (fkLoja) REFERENCES loja (idLoja)
  ) auto_increment 200;

-- -----------------------------------------------------
-- Table`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Usuario (
  idFuncionarios INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  NomeFuncionario VARCHAR(45) NULL,
  TelefoneFuncionario CHAR(10) NULL,
  EmailFuncionario VARCHAR(45) NULL,
  SenhaFuncionario VARCHAR(45) NULL,
  fkFilial INT NOT NULL,
  FOREIGN KEY (fkFilial) REFERENCES Filial (idFilial)
  )auto_increment 300;

-- -----------------------------------------------------
-- Table `Computador`
-- -----------------------------------------------------
CREATE TABLE  Computador (
  idComputador INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fkFilial INT NOT NULL,
  FOREIGN KEY (fkFilial) REFERENCES Filial(idFilial)
 )auto_increment 400; 

-- -----------------------------------------------------
-- Table `RegistrosMaquina`
-- -----------------------------------------------------
CREATE TABLE  RegistrosMaquina (
  idRegistrosMaquina INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fkComputador INT NOT NULL,
  ram VARCHAR(45) NULL,
  disco VARCHAR(45) NULL,
  memoria VARCHAR(45) NULL,
  CHECK (memoria = 'HD' or memoria = 'SSD'),
  temperatura VARCHAR(45) NULL,
  data_Hora DATETIME NULL,
  DispositivoExterno VARCHAR(45) NULL
 )auto_increment 500;


-- -----------------------------------------------------
-- Table `RelatorioEnviado`
-- -----------------------------------------------------
CREATE TABLE  RelatorioEnviado (
  RegistrosMaquina_idRegistrosMaquina INT NOT NULL,
  Usuario_idFuncionarios INT NOT NULL,
  DataHora DATETIME NULL,
  PRIMARY KEY (RegistrosMaquina_idRegistrosMaquina, Usuario_idFuncionarios)
   ) auto_increment 600;





