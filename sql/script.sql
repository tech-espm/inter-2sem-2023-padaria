CREATE DATABASE IF NOT EXISTS padaria DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE padaria;

CREATE TABLE tipo (
  idtipo int NOT NULL,
  nome varchar(50) NOT NULL,
  PRIMARY KEY (idtipo)
);

INSERT INTO tipo (idtipo, nome) VALUES (1, 'Salgado'), (2, 'Doce'), (3, 'Frio');

CREATE TABLE produto (
  idproduto int NOT NULL AUTO_INCREMENT,
  nome varchar(50) NOT NULL,
  codigo varchar(50) NOT NULL,
  inclusao datetime NOT NULL,
  idtipo int NOT NULL,
  marca varchar(50) NOT NULL,
  ean varchar(20) NOT NULL,
  PRIMARY KEY (idproduto),
  KEY produto_idtipo_IX (idtipo),
  CONSTRAINT produto_idtipo_IX_FK FOREIGN KEY (idtipo) REFERENCES tipo (idtipo) ON DELETE RESTRICT ON UPDATE RESTRICT
);
