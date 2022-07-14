DROP TABLE artefato,ativo_financeiro,bicicleta,dispositivos_moveis,outros, SITUACAO_BEM;

 create table artefato(
    id_artefato     serial PRIMARY KEY not null,
    situacao        varchar(255),
    classe          varchar(255),
    tipo            varchar(255),
    quantidade      int,
    valorEstimado 	decimal(10,2),
    apresentante    varchar(255),
    proprietario    varchar(255),
    descricao       varchar(255),
    observacao      varchar(255)
 );

 insert into artefato ( situacao,classe,tipo, quantidade, valorestimado,apresentante,proprietario,descricao,observacao)
 values ('ativo','ativo','ativo',10,1000.00,'Emerson','emerson', 'Teste descrição','teste de observacao');

 update artefato set apresentante = 'Teste1'
  where id_artefato = 1;

  delete from artefato where id_artefato = 1;

 create table ativo_financeiro(
    id_Financeiro   serial PRIMARY KEY not null,
    situacao        varchar(255),
    classe          varchar(255),
    tipo            varchar(255),
    quantidade      int,
    unidade_medida  varchar(255),
    valorEstimado 	decimal(10,2),
    moeda           varchar(255),
    proprietario    varchar(255),
    beneficiario    varchar(255),
    proprietario_cotitular    varchar(255),
    proprietario_cootitular    varchar(255),
    descricao       varchar(255),
    observacao      varchar(255)
 );

  create table bicicleta(
    id_Bicicleta    serial PRIMARY KEY not null,
    situacao        varchar(255),
    marca           varchar(255),
    modelo          varchar(255),
    cor             varchar(255),
    valorEstimado   decimal(10,2),
    chassi          varchar(255),
    apresentante    varchar(255),
    proprietario    varchar(255),
    observacao      varchar(255)
 );
 insert into bicicleta (situacao,marca,modelo,cor,valorEstimado,chassi,apresentante,proprietario,observacao)
values ('ativo','SHIMANO/CANGURU','GTS','Preta',3200.00,'hhh','Matheus','Robertin');

update bicicleta set apresentante = 'Teste1'
  where id_bicicleta = 1;

  delete from bicicleta where id_bicicleta = 1;

 create table dispositivos_moveis(
    id_dispositivosMoveis   serial  PRIMARY KEY not null,
    situacao        varchar(255),
    apresentante    varchar(255),
    proprietario    varchar(255),
    bloqueio        boolean,
    seguro          boolean,
    observacao      varchar(255),
    seguradora      varchar(255)
 );

create table outros(
    id_outros     serial PRIMARY KEY not null,
    situacao          varchar(255),
    classe            varchar(255),
    tipo              varchar(255),
    valorEstimado 	  decimal(10,2),
    numerodeSerie 	  decimal(10,2),
    marca             varchar(255),
    modelo            varchar(255),
    quantidade        int,
    unidadedeMedida   varchar(255),
    acondicionamento  varchar(255),
    descricao         varchar(255),
    apresentante      varchar(255),
    proprietario      varchar(255),
    observacao        varchar(255)
 );




CREATE TABLE SITUACAO_BEM (
    SIBE_ID_SITUAC_BEM INT PRIMARY key,
    SIBE_DS_SITUAC_BEM VARCHAR(100)
);


INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(1, 'Apreensão');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(7, 'Ignorado');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(8, 'Subtraído');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(12, 'Liberado');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(13, 'Extraviado');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(14, 'Entrega Voluntária');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(15, 'Acautelado');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(16, 'Destruído');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(17, 'Leiloado');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(18, 'Arrecadada');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(19, 'Suprimido');

INSERT INTO SITUACAO_BEM
(SIBE_ID_SITUAC_BEM, SIBE_DS_SITUAC_BEM)
VALUES(20, 'Sequestrada (Órdem Judicial)');

alter table artefato add column id_situacao_bem int;

alter table artefato add constraint fk_situacao_bem  foreign key (id_situacao_bem) references SITUACAO_BEM (SIBE_ID_SITUAC_BEM);
