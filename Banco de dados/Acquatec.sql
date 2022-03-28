CREATE DATABASE acquatec;

USE acquatec;

CREATE TABLE Loja (
  idLoja  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nomeLoja VARCHAR(45),
  emailLoja VARCHAR(45),
  telefoneLoja CHAR(10),
  cepLoja CHAR(9),
  numeroRua CHAR(7),
  cnpjMatriz CHAR(20),
  senhaLoja VARCHAR(45)
);


select * from Loja;




